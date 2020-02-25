using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NewProjectAPI.Migrations
{
    public partial class myjobupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "MyJob",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "MyJob",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "PostedDate",
                table: "MyJob",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "MyJob");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "MyJob");

            migrationBuilder.DropColumn(
                name: "PostedDate",
                table: "MyJob");
        }
    }
}
