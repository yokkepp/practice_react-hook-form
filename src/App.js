import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
	/* useFormから関数をimport */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log("onSubmit:", data);
	console.log("errors:", errors);
	return (
		/* handleSubmitはフォームの入力内容を検証したうえで、引数に渡した関数(onSubmit)を実行 */
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>姓</label>
			<input
				{...register("firstName", {
					required: true,
					message: "This is required",
				})}
			/>
			<label>名</label>
			<input
				{...register("lastName", {
					required: true,
					maxLength: 15,
				})}
			/>
			<label>ニックネーム</label>
			<input {...register("nickName", { require: true })} />
			<label>Emailアドレス</label>
			<input
				{...register("email", {
					require: true,
					pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)/,
				})}
			/>

			<input type='submit' />
		</form>
	);
}
