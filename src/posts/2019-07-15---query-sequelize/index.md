---
title: query get attribute on sequelize
date: "2019-07-15T22:40:32.169Z"
categories: ["sequelize"]
tags: ["back end", "node js", "sequelize"]
---
nếu truy vấn trong sequelize thì chúng ta cần phải chú đến việc naming attribute trong sequelize.
việc truy vấn theo tên field trên tbl thì chỉ để GET 1 lần chứ không thể handle chúng thêm lần 2 :3 điều này tôi cũng không thể hiểu @@.
nên chúng ta có interface model(persistence) là chỗ trung gian để trung chuyển data giữa coding và tbl.
####Join, inner join, outer join
In SQL, a join is used to compare and combine — literally join — and return specific rows of data from two or more tables in a database. An inner join finds and returns matching data from tables, while an outer join finds and returns matching data and some dissimilar data from tables.
