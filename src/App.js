import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
	/* useFormから関数をimport */
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log("onSubmit:", data);

	return (
		/* handleSubmitはフォームの入力内容を検証したうえで、引数に渡した関数(onSubmit)を実行 */
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>姓</label>
			<input {...register("firstName")} />
			<label>名</label>
			<input {...register("lastName")} />
			<label>Emailアドレス</label>
			<input {...register("email")} />
			<input type='submit' />
		</form>
	);
}
