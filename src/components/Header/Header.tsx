import { motion } from "framer-motion"
import TypingLoop from "./TypingLoop"
import { FaThumbtack } from "react-icons/fa"
import SocialLinks from "./SocialLinks"
import ContactInfo from "../ContactInfo/ContactInfo"
import myPic from "./my_picture.png";
import "./Header.css";

export default function Header() {
    return (
        < motion.header
            initial={{ opacity: 0, y: -20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header"
        >
            <div className="header-content">
                <div className="profile-pic">
                    <img src={myPic} alt="Lama Naser" />
                </div>
                <div className="header-info">
                    <TypingLoop text="Hi, I'm Lama Naser" />
                    <div className="sticky-note-container">
                        <FaThumbtack className="pin-icon" />
                        <div className="sticky-note">
                            Software Developer | Android & Full-Stack
                        </div>
                    </div>
                    <SocialLinks />
                </div>
            </div>
            <ContactInfo />
        </motion.header >
    );
}