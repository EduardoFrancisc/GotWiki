import "./FormContact.css";
import Button from "../Button/Button";

export default function FormContact() {

    return (
        <form className="formulario" method="post">
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nome:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Escreva seu Nome" required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" className="input">Email:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensagem:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva sua Mensagem" required ></textarea>
            </div>
            <Button mode={"submit"} primary={true} tamanho={"medium"}>Enviar</Button>
        </form>
    )
}