"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6747],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),c=a,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3876:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],u={title:"Generate & Run Migrations"},s=void 0,l={unversionedId:"databases/generate-and-run-migrations",id:"version-1.x/databases/generate-and-run-migrations",title:"Generate & Run Migrations",description:"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself.",source:"@site/versioned_docs/version-1.x/databases/generate-and-run-migrations.md",sourceDirName:"databases",slug:"/databases/generate-and-run-migrations",permalink:"/id/docs/1.x/databases/generate-and-run-migrations",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/generate-and-run-migrations.md",tags:[],version:"1.x",frontMatter:{title:"Generate & Run Migrations"},sidebar:"someSidebar",previous:{title:"Create Models & Queries",permalink:"/id/docs/1.x/databases/create-models-and-queries"},next:{title:"MongoDB (TypeORM or Mongoose)",permalink:"/id/docs/1.x/databases/mongodb"}},p=[{value:"The Commands",id:"the-commands",children:[{value:"Generating Migrations Automatically",id:"generating-migrations-automatically",children:[],level:3},{value:"Run the migrations",id:"run-the-migrations",children:[],level:3},{value:"Revert the last migration",id:"revert-the-last-migration",children:[],level:3},{value:"A Complete Example",id:"a-complete-example",children:[],level:3}],level:2},{value:"The <code>synchronize</code> and <code>dropSchema</code> options",id:"the-synchronize-and-dropschema-options",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself."),(0,i.kt)("p",null,"You have two options: update the database schema manually (using database software, for example) or run migrations."),(0,i.kt)("p",null,"Migrations are a programmatic technique for updating or reverting a database schema in a predictable and repeatable way. They are defined with classes, each of which has an ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," method and a ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," method. The first one contains SQL queries to update the database schema to reflect the new models. The second contains SQL queries to revert the changes made by the ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,i.kt)("p",null,"Theses classes are located in separate files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/migrations")," directory."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of a migration file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MigrationInterface, QueryRunner } from \'typeorm\';\n\nexport class PostRefactoringTIMESTAMP implements MigrationInterface {\n    \n    async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);\n    }\n\n    async down(queryRunner: QueryRunner): Promise<any> { \n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`); // reverts things made in "up" method\n    }\n}\n')),(0,i.kt)("h2",{id:"the-commands"},"The Commands"),(0,i.kt)("h3",{id:"generating-migrations-automatically"},"Generating Migrations Automatically"),(0,i.kt)("p",null,"Usually, you do not need to write migrations manually. TypeORM offers a powerful feature to generate your migration files based on the changes you make to your entities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"---\ntitle: Build the entities\n---\nnpm run build:app\n---\ntitle: Generate the migration file based on the entities changes\n---\nnpm run migration:generate -- -n name-of-this-migration\n---\ntitle: Build the migration files\n---\nnpm run build:migrations\n")),(0,i.kt)("h3",{id:"run-the-migrations"},"Run the migrations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:run\n")),(0,i.kt)("h3",{id:"revert-the-last-migration"},"Revert the last migration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:revert\n")),(0,i.kt)("h3",{id:"a-complete-example"},"A Complete Example"),(0,i.kt)("p",null,"\xa0","1. Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n}\n")),(0,i.kt)("p",null,"\xa0","2. Build the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build:app\n")),(0,i.kt)("p",null,"\xa0","3. Generate a migration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run migration:generate -- --name add-user\n")),(0,i.kt)("p",null,"A new file ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx-add-user.ts")," appears in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/directory"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class addUser1561976236112 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`DROP TABLE "user"`);\n    }\n\n}\n\n')),(0,i.kt)("p",null,"\xa0","4. Build and run the migration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build:migrations\nnpm run migration:run\n")),(0,i.kt)("p",null,"\xa0","5. Add new columns to the entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  async setPassword(password: string) {\n    this.password = await hashPassword(password);\n  }\n\n}\n\n")),(0,i.kt)("p",null,"\xa0","6. Build the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build:app\n")),(0,i.kt)("p",null,"\xa0","7. Generate another migration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run migration:generate -- --name add-email-and-password\n")),(0,i.kt)("p",null,"Another file ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx-add-email-and-password.ts")," appears in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/directory"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class addEmailAndPassword1561981516514 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_ed766a9782779b8390a2a81f444" UNIQUE ("email"))`);\n        await queryRunner.query(`INSERT INTO "temporary_user"("id") SELECT "id" FROM "user"`);\n        await queryRunner.query(`DROP TABLE "user"`);\n        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n        await queryRunner.query(`INSERT INTO "user"("id") SELECT "id" FROM "temporary_user"`);\n        await queryRunner.query(`DROP TABLE "temporary_user"`);\n    }\n\n}\n\n')),(0,i.kt)("p",null,"\xa0","8. Build and run the migration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run build:migrations\nnpm run migration:run\n")),(0,i.kt)("h2",{id:"the-synchronize-and-dropschema-options"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"synchronize")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"dropSchema")," options"),(0,i.kt)("p",null,"These two options are particularly useful for testing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"synchronize")," - Indicates if database schema should be auto created on every application launch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dropSchema")," - Drops the schema each time connection is being established.")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronize")," option for production is not recommended as you could loose data by mistake."),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"http://typeorm.io/#/migrations"},"TypeORM documentation")," gives more details on how to write migrations."))}d.isMDXComponent=!0}}]);