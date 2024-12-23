import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
} from "react-icons/hi2";

import {
	PiGridFourDuotone,
	PiImageDuotone,
	PiHouseDuotone,
	PiBuildingApartmentLight,
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaWhatsapp,
	FaLinkedin
} from "react-icons/fa6";

import {
	TbMailFilled
} from "react-icons/tb";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	person: PiBuildingApartmentLight,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	discord: FaDiscord,
	github: FaGithub,
	instagram: FaInstagram,
	whatsapp: FaWhatsapp,
	mail: TbMailFilled,
	linkedin: FaLinkedin,
	grid: PiGridFourDuotone,
	gallery: PiImageDuotone,
	home: PiHouseDuotone,
};