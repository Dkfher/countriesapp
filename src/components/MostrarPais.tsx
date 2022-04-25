import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useState,
} from "react";

interface IProps {
  setinfopais: Dispatch<SetStateAction<string[]>>;
}
 

  export const MostrarPais = ({ setinfopais }: IProps) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
   
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (inputValue.trim().length > 2) {
        setinfopais((pais) => [...pais, inputValue]);
        setInputValue("");
      }
    };
    return (
      <div className="container">
      <Fragment>
        <form onSubmit={handleSubmit} >
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="input-group flex-nowrap mb-3">
              <input
                type="text"
                value={inputValue}
                className="form-control"
                placeholder="Buscar País..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      </form>
      </Fragment>
      </div>
    );
  };
  

export default MostrarPais;
