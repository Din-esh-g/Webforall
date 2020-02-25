using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NewProjectAPI.Migrations
{
    public partial class propertyModelUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Properties");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Properties",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Properties",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "County",
                table: "Properties",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfPosting",
                table: "Properties",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "OtherInformation",
                table: "Properties",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Properties",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ZipeCode",
                table: "Properties",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PropertyId",
                table: "Photos",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateofPublication",
                table: "News",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<string>(
                name: "JobTitle",
                table: "MyJob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "JobDescription",
                table: "MyJob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "MyJob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ContacDetails",
                table: "MyJob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "MyJob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PropertyId",
                table: "Likes",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PropertyId1",
                table: "Likes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_PropertyId",
                table: "Photos",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_Likes_PropertyId",
                table: "Likes",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_Likes_PropertyId1",
                table: "Likes",
                column: "PropertyId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Properties_PropertyId",
                table: "Likes",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Properties_PropertyId1",
                table: "Likes",
                column: "PropertyId1",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Properties_PropertyId",
                table: "Photos",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Properties_PropertyId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Properties_PropertyId1",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Properties_PropertyId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_PropertyId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Likes_PropertyId",
                table: "Likes");

            migrationBuilder.DropIndex(
                name: "IX_Likes_PropertyId1",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "County",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "DateOfPosting",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "OtherInformation",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "State",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "ZipeCode",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PropertyId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "DateofPublication",
                table: "News");

            migrationBuilder.DropColumn(
                name: "PropertyId",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "PropertyId1",
                table: "Likes");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Properties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "JobTitle",
                table: "MyJob",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "JobDescription",
                table: "MyJob",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "MyJob",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "ContacDetails",
                table: "MyJob",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "MyJob",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
