import { IconType } from "react-icons";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface CustomIconProps {
  icon: IconType
  size?: string
  color?: string
}

const defaultSize = window.devicePixelRatio > 1 ? "30" : "25";
const defaultColor = "grey";

const CustomIcon: React.FC<CustomIconProps> = ({ icon: Icon, size, color }) => {
  const iconSize = size || defaultSize;
  const iconColor = color || defaultColor;
  return <Icon size={iconSize} color={iconColor} />;
};

const IconWrapper: React.FC<{
  icon: IconType
  size?: string
  color?: string
}> = ({ icon, size, color }) => 
  <CustomIcon icon={icon} size={size} color={color} />
;
const DeleteIcon: React.FC<{ size?: string, color?: string }> = (props) => 
  <IconWrapper icon={RiDeleteBinLine} {...props} />
;
const ClearIcon: React.FC<{ size?: string, color?: string }> = (props) => 
  <IconWrapper icon={IoMdCloseCircleOutline} {...props} />
;
export { DeleteIcon, ClearIcon };
