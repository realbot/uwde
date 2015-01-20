name := """uwde-app"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws,
  "org.webjars" %% "webjars-play" % "2.3.0",
  "org.webjars" % "requirejs" % "2.1.15",
  "org.webjars" % "bootstrap" % "3.3.2",
  "org.webjars" % "knockout" % "3.2.0-1"
)
