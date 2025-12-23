"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["860205"],{33886(e,a,s){s.r(a),s.d(a,{metadata:()=>r,default:()=>h,frontMatter:()=>c,contentTitle:()=>i,toc:()=>d,assets:()=>o});var r=JSON.parse('{"id":"ja/ja_Edge_Robotics","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio \u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","source":"@site/docs/ja/ja_Edge_Robotics.md","sourceDirName":"ja","slug":"/ja/robotics_page","permalink":"/ja/robotics_page","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/ja/ja_Edge_Robotics.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1748476800000,"frontMatter":{"description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio \u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","keywords":["robotics","nvidia","ros","isaac"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/ja/robotics_page","last_update":{"date":"05/29/2025","author":"ZhuYaohui"}},"sidebar":"jaSidebar","previous":{"title":"Quantum Mini Linux Development Kit","permalink":"/ja/Quantum-Mini-Linux-Development-Kit"},"next":{"title":"LeRobot SO-101 \u30A2\u30FC\u30E0\u7528 Isaac GR00T N1.5 \u306E\u30D5\u30A1\u30A4\u30F3\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u3068 Jetson Thor \u3078\u306E\u30C7\u30D7\u30ED\u30A4","permalink":"/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor"}}'),n=s(474848),t=s(28453);let c={description:"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio \u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002",title:"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",keywords:["robotics","nvidia","ros","isaac"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ja/robotics_page",last_update:{date:"05/29/2025",author:"ZhuYaohui"}},i="\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",o={},d=[{value:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8",id:"robot-kits",level:2},{value:"\u{1F917} SO-Arm",id:"-so-arm",level:3},{value:"\u{1F697} Lekiwi",id:"-lekiwi",level:3},{value:"\u{1F9BE} StarAI Arm",id:"-starai-arm",level:3},{value:"\u{1F9BF}\u811A\u4ED8\u304D\u30DB\u30A4\u30FC\u30EB",id:"\u811A\u4ED8\u304D\u30DB\u30A4\u30FC\u30EB",level:3},{value:"\u{1F590}\uFE0F \u30CF\u30F3\u30C9",id:"\uFE0F-\u30CF\u30F3\u30C9",level:3},{value:"\u{1F980} \u30A8\u30F3\u30C9\u30A8\u30D5\u30A7\u30AF\u30BF",id:"-\u30A8\u30F3\u30C9\u30A8\u30D5\u30A7\u30AF\u30BF",level:3},{value:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF",id:"actuators",level:2},{value:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC",id:"sensors",level:2},{value:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",id:"software",level:2}];function l(e){let a={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"-\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",children:"\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"\u300C\u4ECA\u65E5\u306E\u79D1\u5B66\u306F\u660E\u65E5\u306E\u6280\u8853\u3067\u3042\u308B\u3002\u300D - \u30A8\u30C9\u30EF\u30FC\u30C9\u30FB\u30C6\u30E9\u30FC"})}),"\n"]}),"\n",(0,n.jsx)("div",{className:"quick-nav-container",children:(0,n.jsxs)("nav",{className:"quick-nav",children:[(0,n.jsxs)("a",{href:"#robot-kits",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,n.jsx)("span",{className:"text",children:"\u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#actuators",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u2699\uFE0F"}),(0,n.jsx)("span",{className:"text",children:"\u95A2\u7BC0\u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#sensors",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F441}\uFE0F"}),(0,n.jsx)("span",{className:"text",children:"\u30BB\u30F3\u30B5\u30FC"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#software",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F4BB}"}),(0,n.jsx)("span",{className:"text",children:"\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,n.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,n.jsxs)("div",{className:"nav-grid",children:[(0,n.jsx)(a.h2,{id:"robot-kits",children:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,n.jsx)("div",{class:"category-group",children:(0,n.jsxs)("div",{class:"category-card robot-kits",children:[(0,n.jsx)(a.h3,{id:"-so-arm",children:"\u{1F917} SO-Arm"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/lerobot_so100m_new/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SO100/101 \u30A2\u30FC\u30E0"})}),(0,n.jsx)("a",{href:"/ja/simulate_soarm101_by_leisaac/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SO10x \u30A2\u30FC\u30E0 with LeIsaac"})}),(0,n.jsx)("a",{href:"/ja/control_robotic_arm_via_phospho/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Phospho Lerobot"})}),(0,n.jsxs)("a",{href:"/ja/training_soarm101_policy_with_isaacLab/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"So Arm RL \u30C8\u30EC\u30FC\u30CB\u30F3\u30B0"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO101 with NVIDIA GR00T"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,n.jsx)(a.h3,{id:"-lekiwi",children:"\u{1F697} Lekiwi"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/lerobot_lekiwi/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Lekiwi \u30E2\u30D0\u30A4\u30EB\u30D9\u30FC\u30B9"})}),(0,n.jsx)("a",{href:"/ja/sound_follow_robot/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Lekiwi \u97F3\u58F0\u8FFD\u5F93"})})]}),(0,n.jsx)(a.h3,{id:"-starai-arm",children:"\u{1F9BE} StarAI Arm"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsxs)("a",{href:"/ja/lerobot_starai_arm/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"StarAI \u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/ja/starai_arm_ros_moveit/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"StarAI Arm MoveIt 2"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/ja/control_robotic_arm_via_gr00t",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"StarAI with NVIDIA GR00T"})})]}),(0,n.jsx)(a.h3,{id:"\u811A\u4ED8\u304D\u30DB\u30A4\u30FC\u30EB",children:"\u{1F9BF}\u811A\u4ED8\u304D\u30DB\u30A4\u30FC\u30EB"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/ja/StackForce_Mini_Wheeled_Legged_Robot",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"\u30DF\u30CB\u30DB\u30A4\u30FC\u30EB\u811A\u30ED\u30DC\u30C3\u30C8"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})}),(0,n.jsx)(a.h3,{id:"\uFE0F-\u30CF\u30F3\u30C9",children:"\u{1F590}\uFE0F \u30CF\u30F3\u30C9"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/ja/hand_amazinghand/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"AmazingHand"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})}),(0,n.jsx)(a.h3,{id:"-\u30A8\u30F3\u30C9\u30A8\u30D5\u30A7\u30AF\u30BF",children:"\u{1F980} \u30A8\u30F3\u30C9\u30A8\u30D5\u30A7\u30AF\u30BF"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/ja/dm_gripper/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"DM \u30B0\u30EA\u30C3\u30D1\u30FC"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})})]})}),(0,n.jsx)(a.h2,{id:"actuators",children:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,n.jsx)("div",{class:"category-group",children:(0,n.jsx)("div",{className:"category-card actuators",children:(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/myactuator_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"MyActuator X \u30B7\u30EA\u30FC\u30BA"})}),(0,n.jsx)("a",{href:"/ja/damiao_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Damiao DM43 \u30B7\u30EA\u30FC\u30BA"})}),(0,n.jsx)("a",{href:"/ja/feetech_servo/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Feetech STS3215 \u30B5\u30FC\u30DC"})}),(0,n.jsx)("a",{href:"/ja/hightorque_control",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"HighTorque \u30B7\u30EA\u30FC\u30BA"})}),(0,n.jsx)("a",{href:"/ja/fashionstar_servo/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Fashionstar \u30B7\u30EA\u30FC\u30BA"})}),(0,n.jsx)("a",{href:"/ja/stackforce_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Stackforce \u30B7\u30EA\u30FC\u30BA"})}),(0,n.jsxs)("a",{href:"/ja/robstride_control/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"RobStride \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]})})}),(0,n.jsx)(a.h2,{id:"sensors",children:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC"}),(0,n.jsx)("div",{class:"category-group",children:(0,n.jsxs)("div",{className:"category-card sensors",children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\u{1F4E1} LiDAR"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/robosense_lidar/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"RoboSense"})}),(0,n.jsx)("a",{href:"/ja/mid360/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"MID360"})}),(0,n.jsx)("a",{href:"/ja/a_loam/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"A-LOAM \u30A2\u30EB\u30B4\u30EA\u30BA\u30E0"})}),(0,n.jsx)("a",{href:"/ja/slamtec/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Slamtec \u30B7\u30EA\u30FC\u30BA"})})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\u{1F4F7} \u30AB\u30E1\u30E9"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/orbbec_gemini2/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Orbbec Gemini 2"})}),(0,n.jsxs)("a",{href:"/ja/orbbec_gemini_335lg",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"Gemini 335Lg \u6DF1\u5EA6"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/ja/orbbec_gemini336",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"Gemini 336 \u6DF1\u5EA6"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/ja/sensing_gmsl_cameras",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SENSING GMSL2"})}),(0,n.jsxs)("a",{href:"/ja/ac1",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"RoboSense AC1"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/ja/orbbec_depth_camera_on_ros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Orbbec with ROS"})}),(0,n.jsx)("a",{href:"/ja/orb_slam3_orbbec_gemini2/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ORB-SLAM3 Gemini2"})}),(0,n.jsx)("a",{href:"/ja/csi_camera_on_ros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"CSI \u30AB\u30E1\u30E9 on Jetson"})}),(0,n.jsx)("a",{href:"/ja/pycuvslam_recomputer_robotics/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"PyCuVSLAM"})})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\u{1F3A4} \u97F3\u58F0"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/ReSpeaker_Core_v2.0/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ReSpeaker Core v2.0"})}),(0,n.jsx)("a",{href:"/ja/ReSpeaker_Mic_Array_v2.0/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ReSpeaker Mic Array v2.0"})})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\u{1F9ED} IMU"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/hexfellow_y200/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"HEXFELLOW Y200"})}),(0,n.jsx)("a",{href:"/ja/wheeltec_imu/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"WHEELTEC IMU"})})]})]})}),(0,n.jsx)(a.h2,{id:"software",children:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,n.jsx)("div",{class:"category-group",children:(0,n.jsxs)("div",{className:"category-card software",children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"ROS \u30A8\u30B3\u30B7\u30B9\u30C6\u30E0"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/installing_ros1/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ROS 1 \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,n.jsx)("a",{href:"/ja/install_ros2_humble/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ROS 2 \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,n.jsx)("a",{href:"/ja/install_isaacros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,n.jsx)("a",{href:"/ja/isaac_ros_apriltag/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS AprilTag"})}),(0,n.jsx)("a",{href:"/ja/isaac_ros_visual_slam/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS V-SLAM"})})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"PX4"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/control_px4_with_recomputer_jetson/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"PX4 with Jetson"})}),(0,n.jsx)("a",{href:"/ja/object_tracking_with_reComputer_jetson_and_pX4/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8FFD\u8DE1\uFF08PX4\uFF09"})})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"NVIDIA Isaac"})}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/ja/install_isaaclab/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac Lab \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,n.jsxs)("a",{href:"/ja/training_soarm101_policy_with_isaacLab/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO Arm RL \u30C8\u30EC\u30FC\u30CB\u30F3\u30B0"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/ja/simulate_soarm101_by_leisaac/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO100 Arm Isaac Sim"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"VLA"})}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsx)("a",{href:"/ja/control_robotic_arm_via_gr00t",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"StarAI with NVIDIA GR00T"})})})]})})]}),"\n",(0,n.jsx)("style",{children:`
/* ====================
 1. \u{9876}\u{90E8}\u{5BFC}\u{822A}\u{680F}\u{6837}\u{5F0F} (\u{4FDD}\u{6301}\u{4E0D}\u{53D8})
 ==================== */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%), radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%), white;
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.quick-nav {
display: flex;
justify-content: space-around;
gap: 1rem;
}

.nav-item {
position: relative;
padding: 0.8rem 1.5rem;
border-radius: 12px;
display: flex;
margin: 6px 6px;
flex-direction: column;
align-items: center;
text-decoration: none !important;
color: #333;
font-weight: 500;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
background: white;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
z-index: 1;
}

.nav-item .icon { font-size: 1.8rem; margin-bottom: 0.5rem; transition: transform 0.3s; }
.nav-item .text { font-size: 0.95rem; white-space: nowrap; }
.nav-item .hover-effect {
position: absolute; bottom: 0; left: 0; width: 100%; height: 0;
background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
border-radius: 12px; transition: height 0.3s ease; z-index: -1;
}
.nav-item:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0,0,0,0.1); color: white; }
.nav-item:hover .icon { transform: scale(1.2) rotate(10deg); }
.nav-item:hover .hover-effect { height: 100%; }

/* ====================
 2. \u{30E1}\u{30A4}\u{30F3}\u{30AB}\u{30C6}\u{30B4}\u{30EA}\u{5927}\u{30AB}\u{30FC}\u{30C9}\u{FF08}\u{5916}\u{5074}\u{30B3}\u{30F3}\u{30C6}\u{30CA}\u{FF09}
 ==================== */
.nav-grid {
display: block;
gap: 2rem;
margin-top: 2rem;
}

.category-group { margin-bottom: 2.5rem; }

.category-card {
position: relative;
padding: 1.8rem;
border-radius: 16px;
background: white;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
transition: all 0.3s ease;
overflow: hidden;
border: 1px solid transparent;
}

/* \u{30AB}\u{30C6}\u{30B4}\u{30EA}\u{30B5}\u{30A4}\u{30C9}\u{88C5}\u{98FE}\u{30D0}\u{30FC} */
.category-card::before {
content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%;
}
.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* ====================
 3. \u{30B3}\u{30F3}\u{30C6}\u{30F3}\u{30C4}\u{5C0F}\u{30AB}\u{30FC}\u{30C9}\u{30EC}\u{30A4}\u{30A2}\u{30A6}\u{30C8}\u{FF08}\u{914D}\u{7F6E}\u{3068}\u{52B9}\u{679C}\u{FF09}
 ==================== */

/* \u{30B0}\u{30EA}\u{30C3}\u{30C9}\u{30B3}\u{30F3}\u{30C6}\u{30CA}\u{FF1A}\u{914D}\u{7F6E}\u{3092}\u{78BA}\u{4FDD} */
.card-container {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* \u{81EA}\u{52D5}\u{6539}\u{884C}\u{3001}\u{6700}\u{5C0F}260px */
gap: 12px; /* \u{30AB}\u{30FC}\u{30C9}\u{9593}\u{9694} */
margin-top: 12px;
margin-bottom: 1.5rem;
}

/* \u{5C0F}\u{30AB}\u{30FC}\u{30C9}\u{672C}\u{4F53} - \u{7AF6}\u{5408}\u{3092}\u{907F}\u{3051}\u{308B}\u{305F}\u{3081}content-card\u{306B}\u{540D}\u{524D}\u{5909}\u{66F4} */
.content-card {
display: flex;
align-items: center;
justify-content: space-between; /* \u{30BF}\u{30A4}\u{30C8}\u{30EB}\u{306F}\u{5DE6}\u{3001}\u{30BF}\u{30B0}\u{306F}\u{53F3} */
padding: 10px 16px;
background: #f9fafb;
border: 1px solid transparent;
border-radius: 8px;
text-decoration: none !important;
color: var(--ifm-font-color-base);
font-weight: 500;
font-size: 0.9rem;
transition: all 0.25s ease;
position: relative;
overflow: hidden;
}

.content-card .text {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin-right: 8px;
z-index: 2;
}

/* \u{5C0F}\u{30AB}\u{30FC}\u{30C9}\u{30DB}\u{30D0}\u{30FC}\u{7279}\u{6B8A}\u{52B9}\u{679C} */
.content-card:hover {
background: #fff;
border-color: #4a90e2;
box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
transform: translateY(-2px); /* \u{308F}\u{305A}\u{304B}\u{306B}\u{4E0A}\u{6607} */
color: #4a90e2;
}

/* \u{30DB}\u{30D0}\u{30FC}\u{6642}\u{5DE6}\u{5074}\u{306B}\u{5C0F}\u{3055}\u{306A}\u{9752}\u{3044}\u{30D0}\u{30FC}\u{304C}\u{8868}\u{793A} */
.content-card::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 0;
height: 100%;
background: #4a90e2;
transition: width 0.2s ease;
}
.content-card:hover::after {
width: 4px; /* \u{5E45}\u{304C}4px\u{306B}\u{5909}\u{66F4} */
}

/* ====================
 4. \u{30BF}\u{30B0}\u{30B9}\u{30BF}\u{30A4}\u{30EB}\u{FF08}Tags\u{FF09}
 ==================== */
.tag {
font-size: 0.7rem;
padding: 2px 8px;
border-radius: 12px;
font-weight: 700;
text-transform: uppercase;
flex-shrink: 0;
z-index: 2;
}

.recommended {
background: rgba(255, 107, 107, 0.1);
color: #ff6b6b;
border: 1px solid rgba(255, 107, 107, 0.2);
/* \u{30B7}\u{30F3}\u{30D7}\u{30EB}\u{306A}\u{547C}\u{5438}\u{30A2}\u{30CB}\u{30E1}\u{30FC}\u{30B7}\u{30E7}\u{30F3} */
animation: pulse 2s infinite;
}

@keyframes pulse {
0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.2); }
70% { box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); }
100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
}

/* ====================
 5. \u{30C0}\u{30FC}\u{30AF}\u{30E2}\u{30FC}\u{30C9}\u{5BFE}\u{5FDC}
 ==================== */
html[data-theme='dark'] .quick-nav-container {
background: radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
html[data-theme='dark'] .nav-item {
color: #e5e7eb; background: rgb(47, 50, 57); box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}
html[data-theme='dark'] .category-card {
background: #1b1b1d; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-color: #303033;
}
html[data-theme='dark'] .content-card {
background: #242526; color: #e5e7eb; border-color: #303033;
}
html[data-theme='dark'] .content-card:hover {
background: #2f2f32; border-color: #60a5fa; color: #60a5fa;
box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
html[data-theme='dark'] .content-card::after { background: #60a5fa; }
html[data-theme='dark'] .recommended {
background: rgba(255, 107, 107, 0.15); color: #ff8e8e; border-color: rgba(255, 142, 142, 0.3);
}
html[data-theme='dark'] h2, html[data-theme='dark'] h3 { color: #f9fafb; }
html[data-theme='dark'] strong { color: #e5e7eb; }

/* ====================
 6. \u{30E2}\u{30D0}\u{30A4}\u{30EB}\u{7AEF}\u{672B}\u{5BFE}\u{5FDC}
 ==================== */
@media (max-width: 768px) {
.quick-nav { flex-direction: column; gap: 0.5rem; }
.nav-item { flex-direction: row; justify-content: start; padding: 0.8rem 1rem; }
.nav-item .icon { margin-bottom: 0; margin-right: 0.8rem; }
.card-container { grid-template-columns: 1fr; } /* \u{30B9}\u{30DE}\u{30FC}\u{30C8}\u{30D5}\u{30A9}\u{30F3}\u{7AEF}\u{672B}\u{3067}\u{306F}\u{5358}\u{5217}\u{8868}\u{793A} */
.category-card { padding: 1.2rem; }
}
`})]})}function h(e={}){let{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453(e,a,s){s.d(a,{R:()=>c,x:()=>i});var r=s(296540);let n={},t=r.createContext(n);function c(e){let a=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);