import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Destination from "@/views/Destination.vue";
import Crew from "@/views/Crew.vue";
import Technology from "@/views/Technology.vue";
import space from "@/space.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/destination/moon",
    name: "destinaition",
    component: Destination,
    children: [
      {
        path: "/destination/moon",
        name: "moon",
        component: () =>
          import(
            /* webpackChunkName: "sub-views" */ "../views/sub-views/moon.vue"
          ),
      },
      {
        path: "/destination/mars",
        name: "mars",
        component: () =>
          import(
            /* webpackChunkName: "sub-views" */ "../views/sub-views/mars.vue"
          ),
      },
      {
        path: "/destination/europa",
        name: "europa",
        component: () =>
          import(
            /* webpackChunkName: "sub-views" */ "../views/sub-views/europa.vue"
          ),
      },
      {
        path: "/destination/titan",
        name: "titan",
        component: () =>
          import(
            /* webpackChunkName: "sub-views" */ "../views/sub-views/titan.vue"
          ),
      },
    ],
  },
  {
    path: "/crew",
    name: "crew",
    component: Crew,
    children: [
      //the path of the children is binded with the slug in the space.js
      {
        path: ":slug",
        name: "Member",
        props: true,
        component: () => import("@/views/sub-views/CrewMembers.vue"),
      },
    ],
    beforeEnter: (to, from, next) => {
      let exist = space.crew.find((crewMember) => crewMember.slug == to.params.slug);
      if (exist) {
        next();
      } else{ 
        next({name: 'Home'})
      }
    },
  },
  {
    path: "/technology",
    name: "technology",
    component: Technology,
    children: [
      {
        path: ":slug",
        name: "Tool",
        props: true,
        component: () => import("@/views/sub-views/TechnologyTools.vue")
      }
    ],
    beforeEnter: (to, from, next) =>{
      let exist = space.technology.find((tools)=>tools.slug== to.params.slug);
      if (exist) {
        next();
      } else {
        next({name: 'Home'})
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
