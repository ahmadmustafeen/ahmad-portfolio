'use client';

const InputField = ({
    id,
    label,
    type = "text",
    placeholder,
    rows,
    className = "",
    ...props
}) => {
    const isTextarea = type === "textarea";

    return (
        <div className={`relative w-full max-w-md sm:max-w-lg lg:max-w-xl ${className}`}>
            {isTextarea ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={rows}
                    className="peer w-full p-3 bg-transparent text-theme-primary border-b border-theme-muted placeholder-transparent focus:outline-none focus:border-primary resize-none"
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="peer w-full p-3 bg-transparent text-theme-primary border-b border-theme-muted placeholder-transparent focus:outline-none focus:border-primary"
                    {...props}
                />
            )}
            <label
                htmlFor={id}
                className="absolute left-3 top-3 text-theme-muted transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-theme-muted peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary"
            >
                {label}
            </label>
        </div>
    );
};

export default InputField;