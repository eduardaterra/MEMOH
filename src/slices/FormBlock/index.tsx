"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useReducer, useState } from "react";
import EmailInput from "@/app/components/EmailInput";
import Checkbox from "@/app/components/Checkbox";
import Button from "@/app/components/Button";
import { download as Download } from "@/app/assets";
import "./styles.scss";

interface DownloadFormReducer {
  canReceiveCommunication: boolean;
  email: string | null;
  error?: string;
}

function reducer(
  state: DownloadFormReducer,
  action: { type: "communication" | "email" | "error"; payload: any }
): DownloadFormReducer {
  const { type, payload } = action;
  switch (type) {
    case "communication":
      return {
        ...state,
        canReceiveCommunication: payload,
      };
    case "email":
      return { ...state, email: payload };
    case "error":
      return { ...state, error: payload };
    default:
      return { ...state };
  }
}

/**
 * Props for `FormBlock`.
 */
export type FormBlockProps = SliceComponentProps<Content.FormBlockSlice>;

/**
 * Component for "FormBlock" Slices.
 */
const FormBlock = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<"form" | "download">(
    "form"
  );
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    () =>
      ({
        canReceiveCommunication: true,
        email: null,
      }) as DownloadFormReducer
  );

  const onSubmit = async (email: string | null) => {
    const emailIsValid = email?.match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (!email || email?.length === 0 || !emailIsValid) {
      return dispatch({ type: "error", payload: "Insira um email válido." });
    }

    setCurrentScreen("download");

    sendGTMEvent({
      event: "downloadStudyWithEmail",
    });

    return fetch("/api/firestore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  };
  return (
    <section className="form-block" id="download">
      <p className="form-block--title">
        <em>DOWNLOAD GRATUITO</em>
        <br />
        ESTUDO HOMENS E CUIDADO
      </p>

      <div className="form-block--form">
        {currentScreen === "form" ? (
          <>
            <EmailInput
              error={state.error}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.currentTarget.value })
              }
            />
            <div className="form--checkbox-container">
              <Checkbox
                selected={state.canReceiveCommunication}
                inverse
                onClick={() =>
                  dispatch({
                    type: "communication",
                    payload: !state.canReceiveCommunication,
                  })
                }
                label="Quero receber novidades do MEMOH."
              />
            </div>
            <div className="form--buttons">
              <Button
                variant="primary"
                onClick={async () => onSubmit(state.email)}
              >
                ENVIAR
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  sendGTMEvent({
                    event: "downloadStudyWithoutEmail",
                  });
                  setCurrentScreen("download");
                }}
              >
                CONTINUAR SEM ENVIAR
              </Button>
            </div>
          </>
        ) : (
          <>
            <a
              href="guia-pratico-grupos-reflexivos-memoh.pdf"
              download
              onClick={() => sendGTMEvent({ event: "downloadStudyMaterial" })}
            >
              <Button variant="secondary" id="download">
                <Download /> DOWNLOAD DO MATERIAL
              </Button>
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default FormBlock;

