import { useState } from "react";

interface DropDownProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDownMenu({
  language,
  setLanguage,
}: DropDownProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen} className="dropdownButton">
        SELECT LANGUAGE
      </button>
      {open ? (
        <ul className="dropdown-content">
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("ara");
              setOpen(false);
            }}
          >
            ARABIC
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("bre");
              setOpen(false);
            }}
          >
            BRETON
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("zho");
              setOpen(false);
            }}
          >
            CHINESE
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("hrv");
              setOpen(false);
            }}
          >
            CROATIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("ces");
              setOpen(false);
            }}
          >
            CZECH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("nld");
              setOpen(false);
            }}
          >
            DUTCH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("est");
              setOpen(false);
            }}
          >
            ESTONIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("fin");
              setOpen(false);
            }}
          >
            FINISH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("deu");
              setOpen(false);
            }}
          >
            GERMAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("fra");
              setOpen(false);
            }}
          >
            FRENCH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("hun");
              setOpen(false);
            }}
          >
            HUNGARIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("ita");
              setOpen(false);
            }}
          >
            ITALIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("jpn");
              setOpen(false);
            }}
          >
            JAPANESE
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("kor");
              setOpen(false);
            }}
          >
            KOREAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("per");
              setOpen(false);
            }}
          >
            PERSIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("pol");
              setOpen(false);
            }}
          >
            POLISH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("por");
              setOpen(false);
            }}
          >
            PORTUGUESE
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("rus");
              setOpen(false);
            }}
          >
            RUSSIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("slk");
              setOpen(false);
            }}
          >
            SLOVAKIAN
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("spa");
              setOpen(false);
            }}
          >
            SPANISH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("swe");
              setOpen(false);
            }}
          >
            SWEDISH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("tur");
              setOpen(false);
            }}
          >
            TURKISH
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("urd");
              setOpen(false);
            }}
          >
            URDU
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setLanguage("cym");
              setOpen(false);
            }}
          >
            WELSH
          </button>
        </ul>
      ) : null}
    </div>
  );
}
