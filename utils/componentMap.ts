import { FC } from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Project from "../components/Project"
import Content from "../components/Content"
import Info from "../components/Info"

export const componentMap: { [key: string]: FC<any> } = {
	Hero,
	Header,
	Project,
	Content,
	Info,
}
