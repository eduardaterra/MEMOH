"use client";
import { DownloadProps } from "@/slices/Download";
import { PrismicRichText } from "@prismicio/react";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Modal from "@/app/components/Modal";
import DownloadForm from "./Form";
import "./styles.scss";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Download({ slice }: DownloadProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <section id="download" className="download download--container">
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <DownloadForm />
      </Modal>
      <div ref={elementRef} className="download--content">
        <div
          className="download--title-container"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div
          className="download--content-container"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <div className="download--text-container">
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div
            className="download--comming-soon"
            onClick={() => {
              sendGTMEvent({
                event: "openDownloadModal",
              });
              setModalIsOpen(true);
            }}
          >
            CLIQUE AQUI
          </div>
        </div>
      </div>
    </section>
  );
}

