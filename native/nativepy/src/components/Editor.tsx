import { AspectRatio } from "@chakra-ui/react";

const Editor = () => {
  return (
    <AspectRatio maxH="100%">
      <iframe
        src="https://trinket.io/embed/python/65890fcad4?start=result"
        frameBorder="0"
        height="80vh"
        marginWidth="0"
        marginHeight="0"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
};

export default Editor;
