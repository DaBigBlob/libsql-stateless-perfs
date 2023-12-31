import { sqliteTable, integer, text, numeric } from "drizzle-orm/sqlite-core"

export const contacts = sqliteTable("contacts", {
	contactId: integer("contact_id").primaryKey(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	email: text("email").notNull(),
	phone: text("phone").notNull(),
	wifeId: text("wife_id"),
	children: numeric("children").notNull(),
});