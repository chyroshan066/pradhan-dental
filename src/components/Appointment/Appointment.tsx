"use client";

import { memo, useCallback, useMemo } from "react";
import { IonIcon } from "../utility/IonIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit } from "@/utils/formData";
import { AppointmentFormData, AppointmentFormSchema } from "@/middlewares/schema";
import { SubmitButton } from "../utility/Button/SubmitButton";
import { ErrorMessage, InputField } from "../utility/InputField";
import { Alert } from "../Alert";
import styles from "./Appointment.module.css";

interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}

const initialValues: AppointmentFormData = {
    name: "",
    phone: "",
    gender: "Male",
    date: "",
    time: "09:00am",
    message: "",
};

export const Appointment = memo(() => {
    const [alertState, setAlertState] = useState<AlertState>({
        isVisible: false,
        type: "success",
        message: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<AppointmentFormData>({
        defaultValues: initialValues,
        resolver: zodResolver(AppointmentFormSchema),
        mode: "onChange", // Enable real-time validation for better UX
        reValidateMode: "onChange", // Re-validate on every change
        criteriaMode: "all", // Show all validation errors
        shouldFocusError: true, // Focus on error field
    });

    const showAlert = useCallback((
        type: AlertState["type"],
        message: string,
        title?: string
    ) => {
        setAlertState({
            isVisible: true,
            type,
            message,
            title,
        });
    }, []);

    const hideAlert = useCallback(() => {
        setAlertState(prev => ({
            ...prev,
            isVisible: false,
        }));
    }, []);

    const handleFormSubmit = useCallback(async (data: AppointmentFormData) => {
        try {
            await onSubmit(data);

            showAlert(
                "success",
                "Thank you! Your appointment has been booked successfully. We look forward to serving you.",
                "Appointment Booked!"
            );

            reset(initialValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while booking an appointment. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Sending Failed"
            );

            console.error('Form submission error:', error);
        }
    }, [reset, showAlert]);

    const onFormSubmit = handleSubmit(handleFormSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting,
        [isSubmitting]
    );

    const buttonText = useMemo(
        () => isSubmitting ? "Booking..." : "Book An Appointment",
        [isSubmitting]
    );

    return <>
        <Alert
            type={alertState.type}
            title={alertState.title}
            message={alertState.message}
            isVisible={alertState.isVisible}
            onDismiss={hideAlert}
            autoDismiss={true}
            autoDismissDelay={6000}
            className="sm:max-w-md"
        />

        <section
            className="reservation"
            aria-label="contact-label"
            id="contact"
        >
            <div className="custom-container">
                <div className={`bg-blue-10 ${styles.reservationForm}`}>
                    <form
                        className={styles.formLeft}
                        onSubmit={onFormSubmit}
                        noValidate
                    >
                        <h2 className="headline-1 text-center">Book Appointment</h2>
                        <p className={`text-center ${styles.formText}`}>
                            Booking request <a href="tel:+97723530874" className={styles.link}>023-530874 </a>
                            or fill out the appointment form
                        </p>
                        <div className={styles.inputWrapper}>

                            <div style={{ marginBottom: '20px' }}>
                                <InputField
                                    id="name"
                                    placeholder="Your Name"
                                    register={register("name")}
                                    error={errors.name?.message}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <InputField
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    register={register("phone")}
                                    error={errors.phone?.message}
                                    disabled={isSubmitting}
                                />
                            </div>

                        </div>
                        <div className={styles.inputWrapper}>
                            <div className="icon-wrapper">

                                <IonIcon
                                    name="person-outline"
                                    aria-hidden="true"
                                />

                                <select
                                    {...register("gender")}
                                    className="input-field"
                                >
                                    {["Male", "Female"].map((gender, index) => (
                                        <option
                                            key={index}
                                            value={gender}
                                        >
                                            {gender}
                                        </option>
                                    ))}
                                </select>

                                <ErrorMessage message={errors.gender?.message} />

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>

                            <div className="icon-wrapper">

                                <IonIcon
                                    name="calendar-clear-outline"
                                    aria-hidden="true"
                                />

                                <InputField
                                    id="date"
                                    type="date"
                                    register={register("date")}
                                    error={errors.date?.message}
                                    disabled={isSubmitting}
                                />

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>

                            <div className="icon-wrapper">

                                <IonIcon
                                    name="time-outline"
                                    aria-hidden="true"
                                />

                                <select
                                    {...register("time")}
                                    className="input-field"
                                >
                                    {[...Array(4)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={`${index < 1 ? `0${9 + index}` : 9 + index}:00am`}
                                        >
                                            {index < 1 ? `0${9 + index}` : 9 + index} : 00 am
                                        </option>
                                    ))}

                                    {[...Array(5)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={`${index < 9 ? `0${1 + index}` : 1 + index}:00pm`}
                                        >
                                            {index < 9 ? `0${1 + index}` : 1 + index} : 00 pm
                                        </option>
                                    ))}

                                </select>

                                <ErrorMessage message={errors.time?.message} />

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <InputField
                                id="message"
                                placeholder="Message"
                                register={register("message")}
                                isTextarea={true}
                                error={errors.message?.message}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className={styles.buttonWrapper}>
                            <SubmitButton
                                isButtonDisabled={isButtonDisabled}
                                btnText={buttonText}
                            />
                        </div>

                    </form>

                    <div className={`text-center ${styles.formRightBg} ${styles.formRight}`}>
                        <h2 className={`headline-1 text-center ${styles.headline1}`}>Contact Us</h2>
                        <p className={`contact-label ${styles.contactLabel}`}>Booking Request</p>
                        <a
                            href="tel:+97723530874"
                            className="body-1 contact-number hover-underline"
                        >
                            023-530874
                        </a>
                        <div className={`separator ${styles.separator}`}></div>
                        <p className={`contact-label ${styles.contactLabel}`}>Location</p>
                        <address className={`body-4 ${styles.body4}`}>
                            Aduwa Khola,  <br />
                            Birtamode, Nepal
                        </address>
                        <p className={`contact-label ${styles.contactLabel}`}>Daily</p>
                        <p className={`body-4 ${styles.body4}`}>
                            Sunday to Friday <br />
                            9.00 am - 5.00pm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>;
});

Appointment.displayName = "Appointment";