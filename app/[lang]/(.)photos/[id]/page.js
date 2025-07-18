
import Modal from "@/app/component/Modal";
import PhotoDetails from "@/app/component/PhotoDetails";

import React from "react";

const Page = ({ params: { id, lang } }) => {
 

  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default Page;
