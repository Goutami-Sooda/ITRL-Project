import { AspectRatio } from "@chakra-ui/react";

const Editor = () => {
  return (
    <AspectRatio>
      <iframe
        src="https://trinket.io/embed/python/65890fcad4?start=result"
        frameBorder="0"
        height="80%"
        marginWidth="0vh"
        marginHeight="0"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
};

export default Editor;
