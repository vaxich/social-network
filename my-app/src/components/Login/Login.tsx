import React from "react";
import {Field} from "react-final-form";
import  {reduxForm,InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string
    password:string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props:any) => {
    return <div>

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field  placeholder={"password"}  name={'password'} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={"input"}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    </div>



}

export const LoginReduxForm = reduxForm<FormDataType>({
    form:"login"
})(LoginForm)


export const Login =() => {

    const onSubmit =(formData:FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>



}