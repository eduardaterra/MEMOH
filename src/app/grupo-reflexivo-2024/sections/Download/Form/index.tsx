"use client";
import { useReducer, useState } from "react";
import EmailInput from "@/app/components/EmailInput";
import Checkbox from "@/app/components/Checkbox";
import Button from "@/app/components/Button";
import { download as Download } from "@/app/assets";
import "./styles.scss";
import { sendGTMEvent } from "@next/third-parties/google";

interface DownloadFormReducer {
  canReceiveCommunication: boolean;
  hasInterestOnCourse: boolean;
  email: string | null;
  error?: string;
}

function reducer(
  state: DownloadFormReducer,
  action: { type: "communication" | "email" | "group" | "error"; payload: any }
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
    case "group": {
      return { ...state, hasInterestOnCourse: payload };
    }
    case "error":
      return { ...state, error: payload };
    default:
      return { ...state };
  }
}

export default function DownloadForm() {
  const [currentScreen, setCurrentScreen] = useState<"form" | "download">(
    "form"
  );
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    () =>
      ({
        canReceiveCommunication: false,
        hasInterestOnCourse: false,
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
      event: "downloadWithEmail",
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
    <div className="form form--container">
      {currentScreen === "form" ? (
        <>
          <h3 className="form--title">Download do material</h3>
          <p className="form--subtitle">
            Mas antes... poderia nos informar o seu email?
          </p>
          <div className="form--inputs">
            <EmailInput
              error={state.error}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.currentTarget.value })
              }
            />
            <div className="form--checkbox-container">
              <Checkbox
                selected={state.hasInterestOnCourse}
                onClick={() =>
                  dispatch({
                    type: "group",
                    payload: !state.hasInterestOnCourse,
                  })
                }
                label="Tenho interesse em saber mais sobre o curso de formação para <b>Grupos Reflexivos.</b>"
              />
              <Checkbox
                selected={state.canReceiveCommunication}
                onClick={() =>
                  dispatch({
                    type: "communication",
                    payload: !state.canReceiveCommunication,
                  })
                }
                label="Aceito receber novidades."
              />
            </div>
            <div className="form--buttons">
              <Button
                variant="full-black"
                onClick={async () => onSubmit(state.email)}
              >
                ENVIAR
              </Button>
              <Button
                variant="black"
                onClick={() => {
                  sendGTMEvent({
                    event: "downloadWithoutEmail",
                  });
                  setCurrentScreen("download");
                }}
              >
                CONTINUAR SEM ENVIAR
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="form--title">Baixe o material aqui:</h3>
          <a
            href="estudo-de-cuidado.pdf"
            download
            onClick={() => sendGTMEvent({ event: "downloadMaterial" })}
          >
            <Button variant="black">
              {" "}
              <Download /> DOWNLOAD DO MATERIAL
            </Button>
          </a>
        </>
      )}
    </div>
  );
}

