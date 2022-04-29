import { IconButton, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useContext, useState } from "react";
import { Web3Context } from "../contexts/Web3Context";

const InfoButton = () => {
  const { loggedIn } = useContext(Web3Context);
  const [showTooltip, setShowTooltip] = useState(false);
  const renderInfoButton = () => {
    if (loggedIn) {
      return (
        <Tooltip
          open={showTooltip}
          onOpen={() => setShowTooltip(true)}
          onClose={() => setShowTooltip(false)}
          placement="bottom"
          title={
            <Typography fontSize="1rem">
              Enter wallet address, ENS <br /> or connect wallet
            </Typography>
          }
          arrow
        >
          <IconButton onClick={() => setShowTooltip(!showTooltip)}>
            <InfoOutlinedIcon sx={{ color: "#8ec3e6" }} />
          </IconButton>
        </Tooltip>
      );
    }
    return <></>;
  };
  return renderInfoButton();
};

export default InfoButton;
