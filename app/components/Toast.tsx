"use client";

export const Toast = ({ mensaje, visible }: { mensaje: string; visible: boolean }) => {
    if (!visible) return null;

    return (
        <div className={`toast toast-top toast-center`}>
            <div className="alert alert-error">
                <span>{mensaje}</span>
            </div>
        </div>
    )
}