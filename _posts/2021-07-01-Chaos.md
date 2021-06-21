---
layout:     post
title:      Black Body
subtitle:   
date:       2019-09-30
author:     Z
header-img: img/post2/1.jpg
catalog: true
tags:
    - Optical Networks and Photonic Systems
---

# 前言

>在法工程师学习的第三年，我选择了**ROSP**（*Réseaux Optiques et Systèmes Photoniques*）的**Master 2**项目，重新拾起了光学和通信的相关知识，所以想把一些自己的理解加上老师和国外经典教材结合起来，并记录下来，做到苟日新，日日新，又日新。如有纰漏，欢迎指教！


# 背景

>多年以后，**Planck**重新思考自己的科学生涯，准会想起冥冥中命运带他去打开潘多拉魔盒那个遥远的下午。当时，物理学的大厦基石是由**Newton**理论与经典热力学组成的，一个个公式定理都围绕着这个基础进行延申，光以太和能量均分定理，麦克斯韦方程组和玻尔兹曼分布，简洁而美丽，活象上帝旨意。但这块天地里有的还是新开辟的，许多东西都叫不出名字，不得不用手指指点点。1900年4月，**Lord Kelvin**，在世纪交接的欢庆声中，在英国皇家学会发表讲演。这位眼神敏锐的北爱尔兰人，满脸络腮胡子，凭借着他对物理异于常人的天才直觉和洞察力，向听众形象地介绍了他所谓的两朵“令人不安的乌云”。"*The beauty and clearness of the dynamical theory, which asserts heat and light to be modes of motion*，"他用刺耳的声调说，"*is at present obscured by two clouds*。"谁料想**Planck**狂热的想象力超过了大自然的创造力，甚至越过了奇迹和魔力的限度，他认为第二朵乌云下面是另外一个全新的世界。（这些都是胡说的哈哈哈）

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
\nu_x, \nu_y, \nu_z = 0, 1, 2, 3 , ..." style="border:none;">
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
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\rho(\nu)d\nu =8\pi\nu^2d\nu/c^3" style="border:none;">

根据模式密度，我们沿着波矢空间积分或者沿着角速度积分都可以，就求得整个的模式数。
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\sum_{\lambda =1,2}\sum_{k} \rightarrow \int dk\left ( Vk^2/\pi^2 \right )\rightarrow \int d\omega \left ( V\omega ^2/\pi^2c^3 \right )" style="border:none;">

我们可以预见，只要知道模式数，我们就可以直接与总能量建立联系。因为接下来的这一步就是考虑，能量是怎么在这些可允许的模式上分布的，也就是普朗克伟大的地方。

### Time Dependence

我们之前说了很多关于电磁场的空间依赖关系，第二步就是计算在温度T下，每个模式上包含了多少能量。人们为了这个争论了很久，进而衍生出“紫外灾难”，让维恩和瑞利等大物理学家栽了跟头。

#### 维恩近似

在东普鲁士出生的维恩(*Wilhelm Wien*)与同事路德维希·霍尔伯恩(*Ludwig Holborn*)一起研究用勒沙特列(*Le Chatelier*)温度计测量高温的方法，并对热动力学进行了相关的研究。也就在这段期间，他从经典热力学的思维出发，借统计热力学之手(麦克斯韦速率分布)，并完全基于对实验数据的经验总结而得到了维恩近似(*Wien Approximation*)。

我们省略之前经典热力学的推导步骤，直接由这个中间结论入手(如果有机会我会给大家介绍推到过程):
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
u=v^3\varphi (\frac{v}{T}) " style="border:none;">

以当时维恩的思考方式，能通过一次实验，就可以得到一组在给定温度T下u与v的一一对应数据，进而描绘能量密度u随频率v的变化曲线，拟合出函数的形式，再扩展为任意温度T下的任意频率v的能量密度u。

于是，1896年，维恩通过实验数据拟合出了这个函数，并通过几个特殊假设，导出了黑体辐射的最终近似公式。

>假设一：温度为T的黑体辐射，可以类比为同样温度下的理想气体分子，适用于热力学当中的麦克斯韦速率分布律。即
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
f(v)=4\pi v^2 (\frac{m}{2\pi k_B T} )^{\frac{3}{2}}  e^{-{\frac{m v^2}{2 k_B T }}}  " style="border:none;">

>假设二：这种类比的理想气体分子的动能与黑体辐射的频率成正比。即
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\frac{1}{2}mv^2=Kv " >
由这两个假设，把麦克斯韦速率分布律中的速度v换成频率v，联立可得
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
f(v)=4\pi \frac{2Kv}{m} (\frac{m}{2\pi k_B T} )^{\frac{3}{2}}  e^{-{\frac{Kv}{ k_B T }}}  " style="border:none;">
维恩当然想到，除了将黑体辐射与理想气体分子进行类比，其能量密度u与分布律f应成正比关系，再加上还应与封闭容器的单位体积内的模式数成正比，于是
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
f(v)=C \frac{8\pi v^2}{c^3} \times4\pi \frac{2Kv}{m} (\frac{m}{2\pi k_B T} )^{\frac{3}{2}}  e^{-{\frac{Kv}{ k_B T }}}    " style="border:none;">

 综上所述，我们常见的维恩公式就是
 <img src="http://chart.googleapis.com/chart?cht=tx&chl=
 u(v)= \alpha v^3 e^{-\frac{\beta v}{T}}" style="border:none;">

那么接下来的工作就是实验测得常数alpha和beta的具体值就好了。事情在短波段(紫外区)进展的很好，但是长波段(红外区)就出现了严重偏差。
![](https://HistoireaParis.github.io/img/post2/3.jpg)

小短评：虽然维恩的假设现在看起来很荒谬，方法也不太恰当，但是是因实验远远领先于理论的表现，最终也起到了一定的历史意义。他就像一个最卓越的工程师，在对问题本质一无所知的情况下，给出了一定范围内的解决方案。

#### 瑞利公式

1900年6月，英国物理学家瑞利(*Rayleigh*)为了反对维恩在推导过程中引入的假设不可靠，就利用电磁波振动模型(即按照经典电磁场理论和经典统计物理理论)导出了一个新的辐射公式，后经金斯(*Jeans*)于1905年改进，合称瑞利-金斯公式。

当时思考空腔内电磁波和腔壁做简谐运动的原子交换能量达到平衡时满足的条件时：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
u(v,T)= \rho(v)\bar{\varepsilon}(v,T)" style="border:none;">
其中，等式右边第一项为模式密度，第二项为空墙器壁原子做简谐运动的平均能量。为了计算它，瑞利采用了统计力学中的能量均分定理：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\bar{\varepsilon}(v,T)=\frac{\int_{0}^{\infty}\varepsilon e^{-\varepsilon /kT}d\varepsilon }{\int_{0}^{\infty}e^{-\varepsilon/kT}d\varepsilon } =kT  " style="border:none;">
所以，带入可知，常见的瑞利公式为
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
udv= \frac{8\pi v^2}{c^3} kT dv" style="border:none;">
我们很容易看出，当频率v越来越大的时候，能量密度u也越来越大，直到无穷，即在短波区(高频紫外区)变为**“紫外灾难”**(*ultraviolet catastrophe*)。维恩因为理论上的不严格，进而与实验不相符时可以理解的，但是瑞利公式是严格按照经典理论，走着“能量均分”的阳光大道得出的，就给物理界带来极大的困惑，动摇了经典物理的基础。
![](https://HistoireaParis.github.io/img/post2/4.png)

## 03

我们可以从统计力学，电磁学等不同角度来探究普朗克公式的推导。整体的思想是把瑞利在低频的优点和维恩在高频的优点结合起来。

### 天才的内插法

1899年，普朗克运用经典电磁理论，研究了封闭在一个具有理想反射壁的空腔的电磁辐射，采用合资振子模型，由运动方程出发，导出单位体积的电磁辐射能和频率间隔的模式数，振子平均能量的关系：
<img src="http://chart.googleapis.com/chart?cht=tx&chl= u= \frac{8\pi v^2}{c^3} \bar{\varepsilon}" style="border:none;">
接着用热力学方法探讨上式的振子平均能量的形式。他以维恩公式的
<img src="http://chart.googleapis.com/chart?cht=tx&chl= u(v)= \frac{8\pi v^2}{c^3} \alpha e^{-\frac{\beta v}{T}}" style="border:none;">
以及相应的热力学关系(熵S)为一极限情况
<img src="http://chart.googleapis.com/chart?cht=tx&chl=
\frac{\mathrm{d^2}S }{\mathrm{d} \bar{\varepsilon^2 }}=-\frac{1}{a\bar{\varepsilon}}" style="border:none;">
并以鲁本斯和库尔鲍姆的实验结果“单色辐射的强度在温度高时与温度成正比”及其相应的热力学关系为另一极限
<img src="http://chart.googleapis.com/chart?cht=tx&chl= \frac{\mathrm{d^2}S }{\mathrm{d} \bar{\varepsilon^2 }}=-\frac{c}{\bar{\varepsilon}^2}
" style="border:none;">
做了天才的猜测(默默吐槽就是把两个经典实验结论综合了一下)，使用内插法，得到
![](https://HistoireaParis.github.io/img/post2/2.gif)
对此积分可得到
![](https://HistoireaParis.github.io/img/post2/1.gif)
又因为
<img src="http://chart.googleapis.com/chart?cht=tx&chl= \frac{\mathrm{d}S }{\mathrm{d} \bar{\varepsilon }}=\frac{1}{T}
" style="border:none;">
立即得到
<img src="http://chart.googleapis.com/chart?cht=tx&chl=  \bar{\varepsilon }=\frac{\beta}{e^{-\beta/\alpha T}-1}
" style="border:none;">
后来人们求出alpha和beta所代表的物理常数，就可得到经典的普朗克公式：
<img src="http://chart.googleapis.com/chart?cht=tx&chl=  u_vdv=\frac{8 \pi v^2}{c^3}\frac{hv}{e^{hv/k T}-1}
" style="border:none;">

### Hilfe！
普朗克的经验公式取得了成功，但是并不能从已知的理论中得到证明，而更像是取巧得来。于是，他决定进一步寻找隐藏在上述公式背后的物理实质。

但是经过努力后，他得出了一个同经典概念严重背离的物理解释，即黑体空腔上器壁上的原子谐振子的能量是量子化的，而且谐振子与腔内电磁波的能量交换也是量子化的。

他将能量E划分为P个相等的能量单元，于是有
  <img src="http://chart.googleapis.com/chart?cht=tx&chl=  E=P\varepsilon_0
" style="border:none;">
这些能量单元epsilon_0可以按照不同的比例分配给N个谐振子。由于这些能量单元都是不可区分的，因此分配方案可以求出。以P=10个能量单元分配到N=5个谐振子上为例。我们由排列组合(十个完全一样的小球被5-1=4个相同的横线分开)可以轻易得出，分配方案有下列这么多种：
![](https://HistoireaParis.github.io/img/post2/3.gif)
推而广之，P个能量单元分配到N个谐振子的方案数就是：
![](https://HistoireaParis.github.io/img/post2/4.gif)
显然P>>1,N>>1,可以采用斯特令近似公式
<img src="http://chart.googleapis.com/chart?cht=tx&chl=  N!=N^N
" style="border:none;">
将上式化为
![](https://HistoireaParis.github.io/img/post2/5.gif)
分配方案数Omega与N个谐振子的玻尔兹曼熵S_N的关系为
![](https://HistoireaParis.github.io/img/post2/6.gif)
又因为总能量为E，故振子的平均能量为<img src="http://chart.googleapis.com/chart?cht=tx&chl=  \bar\varepsilon = \frac{P\varepsilon_0}{N}
" style="border:none;">
带入S_N并除以N得到单个谐振子的熵S为
![](https://HistoireaParis.github.io/img/post2/7.gif)
再根据下列热力学关系，对平均能量epsilon_0微分得
<img src="http://chart.googleapis.com/chart?cht=tx&chl=  \frac{1}{T} = \frac{dS}{d\bar\varepsilon}
" style="border:none;">
<img src="http://chart.googleapis.com/chart?cht=tx&chl=  \bar\varepsilon = \frac{\varepsilon_0}{e^{\varepsilon_0/kT}-1}
" style="border:none;">
考虑到维恩的假设二，谐振子的能量必定正比于辐射场的频率，所以epsilon_0=hv。h也被称为普朗克常数(*Planck's constant*)。

小插曲：普朗克推算完这些公式，在得知自己要打破经典物理的根基时，把这个正比常数用h来表示，即德语里的救命“Hilfe”的缩写。

## 04

#### 关联
我们回首再看走过的路，会发现很多有趣的现象。比如，普朗克公式与维恩公式和瑞利公式的关系。
![](https://HistoireaParis.github.io/img/post2/4.jpg)

我们假设按照瑞利的想法，振子的平均能量为KT，这在特定温度下为一个定值。当v很小的时候，KT的数量级肯定比hv的要大的多，所以可以满足KT里包含整数个hv的条件；但当v很大的时候，hv超过了KT的数量级，KT的范围内就不能包括整数个(甚至一个)hv的能量单元，所以就不能解释现实的物理现象了。
![](https://HistoireaParis.github.io/img/post2/5.png)

#### 验证
我们可以更形象地理解普朗克公式，那就是3K宇宙背景辐射(*Cosmic Microwave Background*),是宇宙学中“大爆炸”遗留下来的热辐射，其特征和绝对温标2.725K的黑体辐射相同。可以说明，宇宙诞生之初，各种基本粒子达到了热平衡，即所谓的黑体状态。


## 引用

1.《*The Quantum Theory of Light, 3rd ed. (Oxford Science Publications)*》 2000 **Rodney Loudon**

2.《*普朗克公式推导的历史探究*》 1985 **金尚年, 田卫东** 复旦大学物理系
