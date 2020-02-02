---
layout:     post
title:      Three-body problem
subtitle:   
date:       2020-02-01
author:     Z
header-img: img/post3/1.jpg
catalog: true
tags:
    - 混沌理论
    - Optical Networks and Photonic Systems
    - 光反馈
---

# 前言

>在工程师最后的大实习，我选择了跟着**M.Frédéric GRILLOT**进行为期7个月的实习，实习内容为硅基量子点激光器的外腔光反馈模拟。为了更好地理解相关知识，以及为以后的学习做准备，就在博客里介绍一下。如有纰漏，欢迎指教！


# 背景

>这所有的一切都要从初中毕业看的那本《三体I》说起。书里描述的三体星球，就活在三个恒星的轨道里，而那个令人绝望的“死神”恰恰就隐藏在预测这三个恒星运行轨迹的“随机性”里。我一直被这个神秘的现象吸引着，并在机缘巧合的作用下，接触到了激光器的有关内容。自此，三体人眼中“死神”的面目渐渐清晰起来。


# 01

## Chaos is not an invention but a real discovery!

虽然动力学目前是一个跨学科的主题，但是它最原本是来源于物理学的一个分支。自17世纪中叶，**Newton**发明了微分方程和牛顿经典力学，以及发现了著名的万有引力定律(**universal gravitation**)用来解释**Kepler**的行星运动法则。这些成就使人们理解了两体运动，即计算地球与太阳的互相作用——经典的平方反比的定律。接下来几代的数学家和物理学家都想对于三体问题(太阳，地球，月亮)上扩展**Newton**的研究方法，让人惊奇的是，这个似乎比两体问题难得多，甚至是无解的(无法得到精确解的形式)。

在1887年，为了祝贺自己的60岁寿诞，瑞典国王奥斯卡二世赞助了一项现金奖励的竞赛，征求三体问题的解答，法国数学家**Poincaré**对此作出了卓越的贡献，他介绍了一种新的观点，更重视定性分析而不是定量。比如，他注重于“太阳系是否永远稳定，或者说一些行星是否最终会飞向无穷远的尽头”，而不是去求得这些行星在任意时刻的精确位置。于是，他发明了一种强大的几何方法去做定性分析，并最终成为第一个个对混沌理论**Chaos**接触的人。

![](https://HistoireaParis.github.io/img/post3/2.jpg)

但是对混沌理论的研究直到20世纪50年代前仍处于黑暗中。尽管动力学衍生的非线性振子模型广泛地用于当时新型的科技里，如雷达，广播，锁相环甚至激光。如下图，是两个二极管激光器的时域强度输出曲线，你能看出什么区别吗？

![](https://HistoireaParis.github.io/img/post3/3.PNG)

或许经过傅里叶变化后会更直观一点。

![](https://HistoireaParis.github.io/img/post3/4.PNG)

我们会发现右侧就是单纯的噪音，而左侧是混沌效应——即被非线性系统的一个特定频率驱使的弛豫现象。下图是1961年发明的红宝石激光器输出图像，连当时的物理学家也错把混沌现象看作是噪音。
![](https://HistoireaParis.github.io/img/post3/5.PNG)

1950年左右，高速计算机的发明成为了动力学的分水岭。高速高性能的计算机能够以之前不可能的方式去计算那些方程，这样就可以给予我们一些对非线性系统的直觉启示。时间来到1963的**Edward Lorenz**，他研究一个预测气象的数学模型，并将其简化成由三个互相联系的常微分方程组成的非线性系统。
![](https://HistoireaParis.github.io/img/post3/6.PNG)
他惊奇地发现这个系统对初值条件很敏感，一些微小的波动就会造成结果的大不同，也就是说这个非线性系统不可被预测，因为一点点的测量错误就会被快速放大，在最终得到一个完全相异的结论。
![](https://HistoireaParis.github.io/img/post3/7.PNG)
所以这会是一个悲伤的故事？我们不可避免地会有对气象的测量错误，那么对较长时间的预测看起来将不复存在。在1972年，华盛顿的一次学术会议上，著名的**蝴蝶效应**被介绍给了大家。
![](https://HistoireaParis.github.io/img/post3/8.PNG)

# 02

## Phase Space

**Edward Lorenz**用了**Poincaré**的几何方法——相空间(**Phase Space**)来定性处理这个问题。

那么什么是相空间呢？

>在一相空间中，系统的每个自由度或参数可以用多维空间中的一轴来代表。对于系统每个可能的状态，或系统参数值允许的组合，可以在多维空间描绘成一个点。通常这样的描绘点连接而成的线可以类比于系统状态随着时间的演化。最后相图可以代表系统可以存在的状态，而它的外型可以轻易地阐述系统的性质。

![](https://HistoireaParis.github.io/img/post3/9.PNG)
上图就是预测气象的微分方程在三维相空间的图像(**Phase Diagram**)，其为一个奇异吸引子。我们可以看出，在同一时间，两个相邻很近的点将会在之后的时间里演化到完全不同的地方。

总结出三个**Chaos**的特性：第一，它在相空间的轨迹绝对不是周期性的，但是却是沿着一个叫奇异吸引子的虚拟表面运动的；第二，对初值条件非常非常敏感，一点微小的波动都会有巨大的变化；第三，**Poincaré-Bendixon theorem**，至少在具有3维相空间的确定性连续系统中才能观察到混沌行为，低于3维的连续系统没有这个现象。

# 03

## Analogy between fluids and laser

在研究激光问题的时候，最典型的问题就是如何处理原子与光的作用。在半经典理论里，把光看做经典的电磁场，用麦克斯韦方程组描述，把原子看成量子化的，用量子力学描述，即光学布洛赫方程。
![](https://HistoireaParis.github.io/img/post3/10.PNG)
我门可以看到之前提到的**Lorenz**的简化气象模型与激光器双能级单模输出的数学模型几乎一致。于是我们就可以把目前在使用的激光器进行分类，根据需要描述它系统状态的变量个数(自由度)。

## Laser classification

![](https://HistoireaParis.github.io/img/post3/11.PNG)
如上图所示，我实习所要研究的量子点激光器就属于半导体激光器的范畴，即B类激光器。












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
