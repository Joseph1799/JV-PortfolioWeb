// src/contact.js
import Swal from "sweetalert2";

const onInsert = async (objeto) => {
    try {
        Swal.fire({
            title: "Sent!",
            text: "Message sent successfully",
            icon: "success",
        });
    } catch (error) {
        console.error("Failed to send message", error);
        Swal.fire({
            title: "Error!",
            text: "Failed to send message",
            icon: "error",
        });
    }
};

export { onInsert };
