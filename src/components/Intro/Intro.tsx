'use client';

import { useState, useRef, memo, useEffect } from 'react';
import { IonIcon } from '../utility/IonIcon';
import styles from "./Intro.module.css";
import { MediaDetails } from '@/types';

interface VideoData extends MediaDetails {
    id: string;
    subtitle?: string;
    description?: string;
}

interface IntroProps {
    videos?: VideoData[];
}

const VideoPlayer = memo(({ video }: { video: VideoData }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [videoDuration, setVideoDuration] = useState<string>('0:00');
    const [aspectRatio, setAspectRatio] = useState<'portrait' | 'landscape'>('portrait');
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoWrapperRef = useRef<HTMLDivElement>(null);

    const formatDuration = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                const videoElement = videoRef.current;
                const videoAspectRatio = videoElement.videoWidth / videoElement.videoHeight;

                // Determine if video is portrait or landscape
                const detectedAspectRatio = videoAspectRatio < 1 ? 'portrait' : 'landscape';
                setAspectRatio(detectedAspectRatio);

                // Set data attribute on video wrapper
                if (videoWrapperRef.current) {
                    videoWrapperRef.current.setAttribute('data-aspect-ratio', detectedAspectRatio);
                }

                const duration = videoElement.duration;
                if (!isNaN(duration) && isFinite(duration)) {
                    setVideoDuration(formatDuration(duration));
                }
            }
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

            // If metadata is already loaded, get duration immediately
            if (videoElement.readyState >= 1) {
                handleLoadedMetadata();
            }
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [video.src]);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current && !hasUserInteracted) {
                try {
                    setIsLoading(true);
                    videoRef.current.muted = true;
                    await videoRef.current.play();
                    setIsPlaying(true);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Auto-play failed:', error);
                    setIsLoading(false);
                }
            }
        };

        // Small delay to ensure component is fully mounted
        const timer = setTimeout(playVideo, 500);

        return () => clearTimeout(timer);
    }, [hasUserInteracted]);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            setIsLoading(true);
            setHasUserInteracted(true);
            videoRef.current.muted = false;
            videoRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error playing video:', error);
                    setIsLoading(false);
                });
        }
    };

    const handlePauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    const handleVideoClick = () => {
        if (isPlaying) {
            handlePauseVideo();
        } else {
            handlePlayVideo();
        }
    };

    return (
        <div className={styles.introVideoContainerFullwidth}>
            <div
                ref={videoWrapperRef}
                className={styles.videoWrapper}
                data-aspect-ratio={aspectRatio}
            >
                <video
                    ref={videoRef}
                    className={styles.introVideo}
                    onEnded={handleVideoEnded}
                    onLoadStart={() => setIsLoading(true)}
                    onCanPlay={() => setIsLoading(false)}
                    onClick={handleVideoClick}
                    controls={isPlaying && hasUserInteracted}
                    preload="metadata"
                    muted
                    loop={!hasUserInteracted}
                >
                    <source
                        src={video.src}
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play/Pause Overlay */}
                {(!isPlaying || !hasUserInteracted) && (
                    <div className={styles.videoOverlay}>
                        <button
                            className={styles.playBtn}
                            onClick={handlePlayVideo}
                            disabled={isLoading}
                            aria-label={hasUserInteracted ? "Play promotional video" : "Play promotional video with sound"}
                        >
                            {isLoading ? (
                                <div className={styles.loadingSpinner}>
                                    <div className={styles.spinner}></div>
                                </div>
                            ) : (
                                <IonIcon
                                    name="play"
                                    aria-hidden="true"
                                />
                            )}
                        </button>

                        {/* Video Info Badge */}
                        <div className={styles.videoInfoBadge}>
                            <div className={styles.badgeContent}>
                                <span>{hasUserInteracted ? "Watch Demo" : "Click for Sound"}</span>
                                <span className={styles.badgeDuration}>{videoDuration}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className={styles.videoDecoration}>
                    <div className={styles.decorationDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
});

VideoPlayer.displayName = "VideoPlayer";

export const Intro = memo(({
    videos = [
        {
            id: 'video-1',
            src: '/images/media/videos/v3.webm',
            title: 'Experience Excellence In',
            subtitle: 'Our Story',
            description: 'Watch our journey of providing world-class dental treatments with cutting-edge technology and compassionate care in the heart of Birtamode.'
        },
        {
            id: 'video-2',
            src: '/images/media/videos/v4.webm',
            title: 'Advanced Dental Technology',
        }
    ]
}: IntroProps) => {
    return (
        <section
            className={`section ${styles.intro}`}
            id="intro"
        >
            <div className="custom-container">
                <div className={styles.introContent}>
                    {videos.length > 0 && (
                        <>
                            {/* Section Header*/}
                            <div className={`text-center ${styles.introHeader}`}>
                                <p className={`section-subtitle ${styles.sectionSubtitle}`}>
                                    {videos[0].subtitle}
                                </p>
                                <h2 className={`h2 section-title ${styles.sectionTitle}`}>
                                    {videos[0].title} <br />
                                    Dental Care
                                </h2>
                                <p className={`section-text ${styles.sectionText}`}>
                                    {videos[0].description}
                                </p>
                            </div>

                            {videos.map((video, index) => (
                                <div
                                    key={video.id}
                                    style={{ marginTop: index > 0 ? '60px' : '0' }}
                                >
                                    <VideoPlayer video={video} />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
});

Intro.displayName = "Intro";