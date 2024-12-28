/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("lista_de_compras", (table) => {
        table.increments("id").primary().unique();
        table.string("nome").notNullable();
        table.string("descriçao").notNullable();   
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("lista_de_compras");
};
