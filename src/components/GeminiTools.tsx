import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import googleicon from "../../public/icons/google-icon.svg";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Box, IconButton, SvgIcon, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface CopyToClipboardProps {
    text: string;
  }
  
  function GeminiTools({ text }: CopyToClipboardProps) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
    return (  
      <Box
      width={50} gap={4}
        sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
        alignContent="center"
      >
        <IconButton onClick={handleCopy}>
          <ContentCopyOutlinedIcon />
        </IconButton>
        <Box alignItems="center" display="flex">
        <Link href="/" passHref >
          <Image
            width={24}
            height={24}
            src={googleicon.src}
            alt="G-MAIL"
          />
        </Link>
        </Box>
        <IconButton>
          <TuneOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
        </IconButton>
        <IconButton>
          <ShareOutlinedIcon />
        </IconButton>
        <IconButton>
          <SvgIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7466 9.0412L5.49656 3.0412C5.3835 3.00184 5.26266 2.99012 5.14415 3.00702C5.02563 3.02392 4.91288 3.06894 4.81532 3.13832C4.71777 3.2077 4.63823 3.29943 4.58338 3.40584C4.52852 3.51224 4.49993 3.63023 4.5 3.74995V20.25C4.5 20.4489 4.57902 20.6396 4.71967 20.7803C4.86032 20.9209 5.05109 21 5.25 21C5.44891 21 5.63968 20.9209 5.78033 20.7803C5.92098 20.6396 6 20.4489 6 20.25V16.2834L22.7466 10.4587C22.8939 10.4077 23.0217 10.312 23.1122 10.185C23.2026 10.058 23.2513 9.90589 23.2513 9.74995C23.2513 9.594 23.2026 9.44194 23.1122 9.31491C23.0217 9.18788 22.8939 9.0922 22.7466 9.0412ZM6 14.6953V4.80464L20.2172 9.74995L6 14.6953Z"
                fill="#2D322C"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Box>
    );
}
 
export default GeminiTools;