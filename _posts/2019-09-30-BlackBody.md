---
layout:     post
title:      BlackBody
subtitle:   
date:       2019-09-30
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

>在引入黑体辐射之后，**Kirchhoff**证明其辐射本领与吸收率之比是一个与物体本身无关的普适函数。其中辐射本领指的是单位时间内从辐射体表面的单位面积上发射出的辐射能量的频率分布，而因为黑体的吸收率为1，这就意味着黑体辐射本身等价于普适函数，于其组成物质无关。

紧接着不久，于1879年和1884年斯洛文尼亚物理学家**Jožef Stefan**和奥地利物理学家**Ludwig Boltzmann**分别独立地提出热力学的一个著名定律：一个黑体表面单位面积在单位时间内辐射出的总能量与黑体本身的热力学温度T的四次方成正比：<img src="http://chart.googleapis.com/chart?cht=tx&chl=
j^{\star }=\sigma T^{4}}" style="border:none;">这个定律被后世脍炙人口为**Stefan-Boltzmann law**。提出过程中**Jožef Stefan**通过的是对实验数据的归纳总结，**Ludwig Boltzmann**则是从热力学理论出发，通过假设用光代替气体作为热机的工作介质，最终推导出与斯特藩的归纳结果相同的结论。

但是，麦克斯韦方程组与热力学的结合看起来不是那么成功。

# 02

我们现在撇开理论上的前期铺垫工作，开始真正接触**Planck**的思考过程。黑体辐射的能量来自其辐射出的电磁场能量。根据**Poynting vector**可知，而能量密度u与电磁场的电场强度和磁场强度有关。所以想弄清黑体辐射的能量，我们需要估计黑体的电磁场分布。

总是很方便地在一个光腔（*cavity*）里讨论电磁辐射的能量。因为在这个系统里，电磁场只能以离散的空间模式被激发，可以大大化简计算过程。一些光学实验就是使用受限的空间区域，比如激光里的**Fabry-Perot cavity**。但大多数的光学实验没有一个明晰的光腔，而是让光能从光源经过一系列的交换介质到达探测器。即使通常使用一些光腔使光能进出，但整体上系统并没有被限制进去。

**Planck's law**是描述在一定温度T下，封闭光腔内电磁场辐射能量的频谱分布，（与黑体等效），故简称黑体辐射。计算频率分布时，我们常常从两个方面去考虑。第一，考虑光腔内场的空间依赖（*spatial dependence*）去确定能够激发的空间模式数；第二，考虑光腔内场的时间依赖（*time dependence*）去计算每个空间模式所携带的能量数值。

那么什么是光腔的空间模式（*mode*）呢？

>空间模式，就是描述电磁场在有限空间V的数学基。

但是它直观的感受是什么呢？为了使计算尽可能简单，我们选择一个长度为L的立方体腔，假设其四壁假定能完美导电，电场强度矢量E(r，t)在边界处消失为0，如Fig1.1所示。
![](https://HistoireaParis.github.io/img/post2/1.PNG)

### Spatial Dependence

第一部分的计算完全是经典理论可以解释的，不受量子化（*quantization*）的影响（可能在之后的章节介绍）。由真空中电场的波动方程列出电场的关系：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
{\partial ^{2}E(r,t) \over \partial t^{2}}=c^{2}\nabla ^{2}E(r,t)" style="border:none;">
这里c是光速（*the velocity of light*）,加上麦克斯韦方程组：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\nabla \cdot E(r,t)=0" style="border:none;">
其方程组的解满足边界条件后，如下所示
![](https://HistoireaParis.github.io/img/post2/2.PNG)
我们可以得知，E(t)与就具体位置无关，波矢(*wavevector*)**k**满足
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
k_x=\pi\nu_x/L" style="border:none;">
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
k_y=\pi\nu_y/L" style="border:none;">
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
k_z=\pi\nu_z/L" style="border:none;">
其中v为整数，且只能有一个为0
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\nu_x, \nu_y, \nu_z = 0,1,2,3,..." style="border:none;">
这些可允许存在的波矢可以画作一个三维的点阵(见Fig1.2)，每个点之间的距离为pi/L:
![](https://HistoireaParis.github.io/img/post2/3.PNG)

我们可以很轻易地验证得到的答案，比如让y=0或L，z=0或L，E在x方向的分量就为0了。还发现边界条件(*boundary condition*)也可以满足把cos和sin互换，但是麦克斯韦方程组(*Maxwell equation*)就不能满足了，这有悖于对称性，所以我们更正为：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
k \cdot E(t)=0" style="border:none;">
也就是说E(t)与波矢k成直角，故对于每个允许的波矢都有两个不同的独立的方向，即偏振。

>综上所述，因为边界条件的限制，波矢k必须取离散的整数，那么每个三元整数组(x,y,z)和偏振的(1，2)定义了一个辐射场的空间模式。任意一个光腔内激发出的电磁场都可以用这些模式的求和表示。

那么怎么计算模式的数目呢？
>回归积分的思想，我们先要知道k到k+dk之间的波矢数。这个正好是Fig1.2中，半径k和k+dk之间的八分之一球壳包含的波矢数(因为波矢k只能取正整数)。如果进一步近似，因为现实中pi/L远远要比k的值小，所以我们当作k是连续的，考虑到了偏振的两个状态。由此可知：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\frac{1} 8 (4\pi k^2 dk)(\pi/L)^{-3}\times2" style="border:none;">


接着，我们定义模式密度为每单位体积内的模式数，那么
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\rho(k)dk =k^2dk/\pi^2" style="border:none;">
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\rho(\omega)d\omega =\omega^2d\omega/\pi^2c^3" style="border:none;">
