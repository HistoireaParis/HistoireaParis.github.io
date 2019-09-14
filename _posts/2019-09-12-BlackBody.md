---
layout:     post
title:      BlackBody
subtitle:   
date:       2019-09-12
author:     Z
header-img: img/post2/1.jpg
catalog: true
tags:
    - 黑体辐射
    - Optical Networks and Photonic Systems
    - 光通信
---
# 前言

>在法工程师学习的第三年，我选择了**ROSP**（*Réseaux Optiques et Systèmes Photoniques*）的**Master 2**项目，重新拾起了光学和通信的相关知识，所以想把一些自己的理解加上老师和国外经典教材结合起来，并记录下来，做到苟日新，日日新，又日新。如有纰漏，欢迎指教！


# 背景

>多年以后，**Planck**重新思考自己的科学生涯，准会想起冥冥中命运带他去打开潘多拉魔盒那个遥远的下午。当时，物理学的大厦基石是由**Newton**理论与经典热力学组成的，一个个公式定理都围绕着这个基础进行延申，光以太和能量均分定理，麦克斯韦方程组和玻尔兹曼分布，简洁而美丽，活象上帝旨意。但这块天地里有的还是新开辟的，许多东西都叫不出名字，不得不用手指指点点。1900年4月，**Lord Kelvin**，在世纪交接的欢庆声中，在英国皇家学会发表讲演。这位眼神敏锐的北爱尔兰人，满脸络腮胡子，凭借着他对物理异于常人的天才直觉和洞察力，向听众形象地介绍了他所谓的两朵“令人不安的乌云”。"*The beauty and clearness of the dynamical theory, which asserts heat and light to be modes of motion*，"他用刺耳的声调说，"*is at present obscured by two clouds*。"谁料想**Planck**狂热的想象力超过了大自然的创造力，甚至越过了奇迹和魔力的限度，他认为第二朵乌云下面是另外一个全新的世界。

# 01

人们早就发现物质可以发光。铁匠锻造金属时不同颜色渐变的现象，从暗红色到橙黄色的色变很清楚地告诉我们，辐射出来的光能量和频率与温度之间存在着某种对应的关系。比如火星表面温度大约为300K，所以呈现红色；我们的太阳这颗恒星，其光球表面温度为5778K，所以呈现黄色；参宿七温度大约在11400K左右，呈蓝色。

![](https://HistoireaParis.github.io/img/post2/2.jpg)

>*Everything glows with the light of its own internal heat.*

进一步研究发现，温度不同每种物质的辐射谱也随之变化。直到19世纪的后半叶，发热物体的亮度分布与频率关系图谱被实验结果精确地绘制了出来。但要研究实际问题，我们需要理想的物理学模型。

1862年，**Gustav Robert Kirchhoff**创造了“**黑体**”这个名词，并提出了**Kirchhoff's law of thermal radiation**。

>在热力学里，黑体是一个理想化的模型。对于任何波长的电磁波吸收系数为1，透射系数为0。所表现出来的物理特性是温度对于每个部分恒定不变，并不与外界进行热交换，通过电磁辐射的方式保持热平衡状态，其辐射谱只取决于黑体的温度。值得注意的是，黑体不一定是黑色的。对于人的视觉来说，黑体在700K以下看起来是黑色的，因辐射能量不大，并且放出红外线。随着温度的升高，黑体开始放出可见光，最后变为白色，同时有紫外线。

>在引入黑体辐射之后，**Kirchhoff**证明其辐射本领<img src="http://chart.googleapis.com/chart?cht=tx&chl= E(\upsilon,T)" style="border:none;">与吸收率<img src="http://chart.googleapis.com/chart?cht=tx&chl= A(\upsilon,T)" style="border:none;">之比是一个与物体本身无关的普适函数<img src="http://chart.googleapis.com/chart?cht=tx&chl=
f(\upsilon,T)" style="border:none;">其中辐射本领指的是单位时间内从辐射体表面的单位面积上发射出的辐射能量的频率分布，而因为黑体的吸收率为1，这就意味着黑体辐射本身等价于普适函数，于其组成物质无关。

紧接着不久，于1879年和1884年斯洛文尼亚物理学家**Jožef Stefan**和奥地利物理学家**Ludwig Boltzmann**分别独立地提出热力学的一个著名定律：一个黑体表面单位面积在单位时间内辐射出的总能量与黑体本身的热力学温度T的四次方成正比：<img src="http://chart.googleapis.com/chart?cht=tx&chl=
j^{\star }=\sigma T^{4}}" style="border:none;">这个定律被后世脍炙人口为**Stefan-Boltzmann law**。提出过程中**Jožef Stefan**通过的是对实验数据的归纳总结，**Ludwig Boltzmann**则是从热力学理论出发，通过假设用光代替气体作为热机的工作介质，最终推导出与斯特藩的归纳结果相同的结论。

但是，麦克斯韦方程组与热力学的结合看起来不是那么成功。

# 02

我们现在撇开理论上的前期铺垫工作，开始真正接触**Planck**的思考过程。黑体辐射的能量来自其电磁场的能量。根据**Poynting vector**可知，而能量密度u与电磁场的电场强度和磁场强度有关。所以想弄清黑体辐射的能量，我们需要估计黑体里的电磁场分布。

总是很方便地在一个光腔（*cavity*）里讨论电磁辐射的能量。因为在这个系统里，电磁场只能以离散的空间模式被激发，可以大大化简计算过程。一些光学实验就是使用受限的空间区域，比如激光里的**Fabry-Perot cavity**。但大多数的光学实验没有一个明晰的光腔，而是让光能从光源经过一系列的交换介质到达探测器。即使通常使用一些光腔使光能进出，但整体上系统并没有被限制进去。

那么什么是光腔的空间模式（*mode*）呢？

>空间模式，就是描述电磁场在有限空间V的数学基。

但是它直观的感受是什么呢？以最简单的例子来说，我们选择拿真空中电场的波动方程
