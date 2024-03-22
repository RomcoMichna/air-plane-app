import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TextInputField from "../input/TextInputField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { setAirportsValue, setCountriesValue, setMetarBool, setSigmetBool, setTafBool } from "../../../store/textInput/textInputSlice";
import ChatboxInputField from "../input/ChatBoxInputField";
import styleUtils from "../../../styles/utils.module.css"


interface textInput {
    airportsValue: string,
    countriesValue: string,
    metarBool: boolean,
    sigmetBool: boolean,
    tafBool: boolean,
}

const InputForm = () => {

  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<textInput>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: textInput) => {
    dispatch(setAirportsValue(data.airportsValue));
    dispatch(setCountriesValue(data.countriesValue));
    dispatch(setMetarBool(data.metarBool));
    dispatch(setSigmetBool(data.sigmetBool));
    dispatch(setTafBool(data.tafBool));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-inline-flex">
            <ChatboxInputField 
                name="metarBool"
                label="Metar"
                register={register}
                error={errors.metarBool}
            />
            <ChatboxInputField 
                className="mx-4"
                name="sigmetBool"
                label="SIGMET"
                register={register}
                error={errors.sigmetBool}
            />
            <ChatboxInputField 
                name="tafBool"
                label="TAF"
                register={register}
                error={errors.tafBool}
            />
        </div>
        <TextInputField 
            name="airportsValue"
            label="Airports"
            type="text"
            placeholder="Airports"
            register={register}
            registerOptions={{ required: false }}
            error={errors.airportsValue}
        />
            <TextInputField 
            name="countriesValue"
            label="Countries"
            type="text"
            placeholder="Countries"
            register={register}
            registerOptions={{ required: false }}
            error={errors.countriesValue}
        />
        <Button
            type="submit"
            disabled={isSubmitting}
            className={styleUtils.width100}
        >
            Submit
        </Button>
    </Form>
  )
}

export default InputForm;
