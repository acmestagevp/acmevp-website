import { FC } from "react"
import Header from "../components/Header"
import Details from "../components/Details"
import Banner from "../components/Banner"
import Project from "../components/Project"
import Content from "../components/Content"
import Info from "../components/Info"

export const componentMap: { [key: string]: FC<any> } = {
	Header,
	Details,
	Banner,
	Project,
	Content,
	Info,
}
