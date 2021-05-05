import React, {useState}from "react";
import {Link} from "react-router-dom";
import Logo from "components/Logo/Logo.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Button,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    FormFeedback,
} from "reactstrap";
export default function SignIn(){

    const [signinEmailFocus, setSigninEmailFocus] = useState("");
    const [signinPasswordFocus, setSigninPasswordFocus] = useState("");
    
    const formik = useFormik({
        initialValues: {
          email: '',
          senha: "",
         
        },
        validationSchema: yup.object({
            email: yup.string().min(8, 'Deve ter pelo menos 8 caracteres').email('E-mail inválido!').required("Campo obrigatório"),
            senha: yup.string().min(8, 'Deve ter pelo menos 8 caracteres').required("Campo obrigatório"),
        })
      });
    
    function entrar() {
        console.log(formik.values)
        
        formik.values.email? alert(formik.values.email) : alert('não leu a variável')

        sessionStorage.setItem('email', formik.values.email)
        
        const meunome = sessionStorage.getItem('email')

        // console.log(meunome)
    }
    
    return(
        <>
            <div className="form-container sign-in-container">
                <Form action="#" role="form">
                    <Logo/>
                    <h2>Entrar</h2>
                    <span className="text-default mb-4">Use sua conta</span>
                    <FormGroup className={"mb-3" + signinEmailFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            {/* <div>{formik.values.email}</div> */}
                            <Input 
                                placeholder="Email"
                                type="email"
                                onFocus={() => setSigninEmailFocus("focused")}
                                onBlur={() => setSigninEmailFocus("")}
                                invalid={formik.touched.email && formik.errors.email ? true : false}
                                {...formik.getFieldProps('email')}>
                            </Input>
                            <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                           

                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={signinPasswordFocus}>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-lock-circle-open"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            {/* <TextField error={formik.touched.assunto && formik.errors.assunto ? true : false} helperText={formik.touched.assunto && formik.errors.assunto ? formik.errors.assunto : null}  /> */}
                            <Input
                                placeholder="Senha"
                                type="password"
                                onFocus={() => setSigninPasswordFocus("focused")}
                                onBlur={() => setSigninPasswordFocus("")}
                                invalid={formik.touched.senha && formik.errors.senha ? true : false}
                                {...formik.getFieldProps('senha')}>
                            </Input>
                            <FormFeedback>{formik.touched.senha && formik.errors.senha ? formik.errors.senha : null}</FormFeedback>
                        </InputGroup>
                    </FormGroup>
                    <Link to="/reset-page">
                        Esqueci minha senha!
                    </Link>
                    <Button type='submit' onClick={entrar} className="mt-3" color="primary">
                        Entrar
                    </Button>
                </Form>
            </div>
        </>
    );
}