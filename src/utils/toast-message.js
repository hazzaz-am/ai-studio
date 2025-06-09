import { Slide, toast } from "react-toastify";

export function toastMessage(msg, type) {
	const settings = {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		transition: Slide,
	};
	if (type === "error") {
		return toast.error(msg, settings);
	} else if (type === "success") {
		return toast.success(msg, settings);
	}
}
