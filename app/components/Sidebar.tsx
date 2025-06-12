"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const docs = [
	{
		section: "Getting Started",
		items: [
			{ name: "Getting Started", path: "/docs/getting-started" },
		],
	},
	// Add more sections as needed
];
const examples = [
	{
		section: "Basic Examples",
		items: [
			{ name: "Example 1", path: "/examples/example-1" },
			{ name: "Example 2", path: "/examples/example-2" },
		],
	},
	// Add more sections as needed
];

export default function Sidebar() {
	const pathname = usePathname();
	const [search, setSearch] = useState("");
	const [menu, setMenu] = useState<"docs" | "examples">("docs");

	// Switch menu tab based on current route
	useEffect(() => {
		if (pathname.startsWith("/examples")) {
			setMenu("examples");
		} else if (pathname.startsWith("/docs")) {
			setMenu("docs");
		}
	}, [pathname]);

	const sections = (menu === "docs" ? docs : examples)
		.map((section) => ({
			...section,
			items: section.items.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			),
		}))
		.filter((section) => section.items.length > 0);

	return (
		<nav className={styles.sidebar}>
			<div className={styles.menuTabs}>
				<button
					className={menu === "docs" ? styles.menuActive : ""}
					onClick={() => setMenu("docs")}
				>
					Documentation
				</button>
				<button
					className={menu === "examples" ? styles.menuActive : ""}
					onClick={() => setMenu("examples")}
				>
					Examples
				</button>
			</div>
			<input
				type="text"
				placeholder={`Search ${menu}...`}
				className={styles.searchInput}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{sections.length === 0 && (
				<div className={styles.noResults}>No results found</div>
			)}
			<ul>
				{sections.map((section) => (
					<li key={section.section} className={styles.section}>
						<div className={styles.sectionTitle}>{section.section}</div>
						<ul className={styles.sectionList}>
							{section.items.map((item) => (
								<li key={item.path}>
									<Link
										href={item.path}
										className={
											pathname === item.path ? styles.active : undefined
										}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	);
}
