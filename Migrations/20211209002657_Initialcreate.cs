using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectAngularTeste.Migrations
{
    public partial class Initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Senha = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Veiculos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoriaVeiculo = table.Column<string>(nullable: true),
                    Marca = table.Column<string>(nullable: true),
                    Modelo = table.Column<string>(nullable: true),
                    AnoFAbricacao = table.Column<string>(nullable: true),
                    Versao = table.Column<string>(nullable: true),
                    ValorDeVenda = table.Column<string>(nullable: true),
                    Consignado = table.Column<string>(nullable: true),
                    Chassi = table.Column<string>(nullable: true),
                    TipoDeVeiculo = table.Column<string>(nullable: true),
                    Combustivel = table.Column<string>(nullable: true),
                    Cor = table.Column<string>(nullable: true),
                    Km = table.Column<string>(nullable: true),
                    Placa = table.Column<string>(nullable: true),
                    Renavan = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Veiculos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Veiculos");
        }
    }
}
