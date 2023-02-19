import { Component, OnInit } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as am4core from "@amcharts/amcharts4/core";
import { Chart, Series } from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/moonrisekingdom";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  c: any;
  s: any;
  constructor() {
    this.s = Series;
    this.c = Chart;
   }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills() {

    // https://www.amcharts.com/docs/v4/chart-types/force-directed/#Creating_a_Force_Directed_Tree

    am4core.useTheme(am4themes_animated);
    this.c = am4core.create("skills", am4plugins_forceDirected.ForceDirectedTree);
    this.s = this.c.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
    this.s.data = [
      {
        "name": "Skill",
        "children": [
          {
            "name": 'Technologies',
            "children": [
              {
                "name": 'FrontEnd',
                "children": [
                  {
                    name: "Angular", value: 1
                  },
                  {
                    name: "React", value: 1
                  },
                  {
                    name: "HTML", value: 1
                  },
                  {
                    name: "Css", value: 1
                  },
                  {
                    name: "Javascript", value: 1
                  },
                  {
                    name: "Jquery", value: 1
                  },
                ]
              },
              {
                "name": 'BackEnd',
                "children": [
                  {
                    name: "Asp.net", value: 1
                  },
                  {
                    name: "c#", value: 1
                  },
                  {
                    name: "MS-SQL", value: 1
                  },
                  {
                    name: "PHP", value: 1
                  }
                ]
              },
             
            ]
          },
          {
            "name": 'Frameworks',
            "children": [
              {
                name: "MVC", value: 1
              },
              {
                name: "REST api", value: 1
              },
              {
                name: "Codeigniter", value: 1
              },
              {
                name: "Ionic", value: 1
              }
            ]
          },
          {
            "name": 'IDE',
            "children": [
              {
                name: "Visual studio", value: 1
              },
              {
                name: "Visual studio\ncode", value: 1
              },
            ]
          },
          {
            "name": 'Tools',
            "children": [
              {
                name: "JIRA", value: 1
              },
              {
                name: "SVN", value: 1
              },
              {
                name: "GIT", value: 1
              },
              {
                name: "Post man", value: 2
              }
            ]
          }
        ]
      }
    ];

    this.s.dataFields.value = "value";
    this.s.dataFields.name = "name";
    this.s.dataFields.children = "children";
    // this.s.colors.list = [am4core.color("grey"),am4core.color("red"),am4core.color("yellow")];

    // Add labels
    this.s.nodes.template.label.text = "{name}";
    this.s.fontSize = 12;
    this.s.minRadius = 40;
    //this.s.maxRadius = 40;
    //this.s.centerStrength = 0.2;
    this.s.links.template.distance = 0.2;
    this.s.links.template.strength = 0.5;
    this.s.manyBodyStrength = -30;
  }
}
