<template>
    <div>
        <div class="priceBoxTitle">
            <div>选择VIP版套餐</div>
            <div>新购1次送10次</div>
        </div>
        <div class="priceBox">
            <div class="boxTop">
                <div class="priceName">转换套餐</div>
                <div class="priceMenu">
                    <div class="menuConf" @click="tabMenu(0)">
                        <!-- 5次 -->
                        <div v-show="activeIndex !== 0">
                          <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Slice</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="018caozuo_queding">
                                        <rect id="Rectangle" stroke="#CFCFCF" x="0.5" y="0.5" width="128.44" height="79"></rect>
                                        <text id="5次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                                            <tspan x="45.520381" y="47">5次</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>  
                        </div>
                        <div v-show="activeIndex == 0">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
                                <title>Slice</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
                                        <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
                                        <text id="5次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                                            <tspan x="45.020381" y="48">5次</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="menuConf" @click="tabMenu(1)">
                        
                        <div v-show="activeIndex == 1">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="45.2157211" y="69">送1次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="10次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="40.010381" y="31">10次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex !== 1">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
                                <title>Slice</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
                                        <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
                                        <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                                            <tspan x="45.2157211" y="69">送1次</tspan>
                                        </text>
                                        <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
                                        <text id="10次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                                            <tspan x="40.010381" y="31">10次</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="menuConf"  @click="tabMenu(2)">
                        
                        <div v-show="activeIndex !== 2">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
                                <title>Slice</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
                                        <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
                                        <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                                            <tspan x="43.8227211" y="69">送3次</tspan>
                                        </text>
                                        <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
                                        <text id="20次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                                            <tspan x="37.920381" y="31">20次</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div v-show="activeIndex == 2">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
                                <title>Slice</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
                                        <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
                                        <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                                            <tspan x="43.8227211" y="69">送3次</tspan>
                                        </text>
                                        <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
                                        <text id="20次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                                            <tspan x="37.920381" y="31">20次</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="menuConf"  @click="tabMenu(3)">
                        <div v-show="activeIndex !== 3">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                <tspan x="40.0157211" y="69">送10次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="50次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                <tspan x="37.920381" y="31">50次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex == 3">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="40.0157211" y="69">送10次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="50次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="37.920381" y="31">50次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                    </div>
                    <div class="menuConf"  @click="tabMenu(4)">
                        <div v-show="activeIndex !== 4">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                <tspan x="38.6227211" y="69">送30次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="100次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                <tspan x="32.410381" y="31">100次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex == 4">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="38.6227211" y="69">送30次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="100次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="32.410381" y="31">100次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                    </div>

                    <div class="menuConf"  @click="tabMenu(5)">
                        <div v-show="activeIndex !== 5">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                <tspan x="38.6227211" y="69">送80次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="200次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                <tspan x="30.320381" y="31">200次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex == 5">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="38.6227211" y="69">送80次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="200次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="30.320381" y="31">200次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                    </div>
                    <div class="menuConf"  @click="tabMenu(6)">
                        <div v-show="activeIndex !== 6">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                <tspan x="33.4227211" y="69">送300次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="500次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                <tspan x="30.320381" y="31">500次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex == 6">
<svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="33.4227211" y="69">送300次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="500次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="30.320381" y="31">500次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                    </div>
                                        <div class="menuConf"  @click="tabMenu(7)">
                        <div v-show="activeIndex !== 7">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#CFCFCF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#000000">
                <tspan x="29.6157211" y="69">送1000次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#CFCFCF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="1000次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#000000">
                <tspan x="24.810381" y="31">1000次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="activeIndex == 7">
                            <svg width="130px" height="80px" viewBox="0 0 130 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="018caozuo_queding" transform="translate(-1.000000, 0.000000)">
            <rect id="Rectangle" stroke="#007AEF" fill="#007AEF" x="1.5" y="0.5" width="128.44" height="79"></rect>
            <text id="首次购买多送10次" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" letter-spacing="2" fill="#FFFFFF">
                <tspan x="29.6157211" y="69">送1000次</tspan>
            </text>
            <path d="M1.92457143,45 L129.977714,45" id="Line" stroke="#FFFFFF" stroke-linecap="square" stroke-dasharray="10,5"></path>
            <text id="1000次" font-family="PingFangSC-Semibold, PingFang SC" font-size="22" font-weight="500" letter-spacing="2" fill="#FFFFFF">
                <tspan x="24.810381" y="31">1000次</tspan>
            </text>
        </g>
    </g>
</svg>
                        </div>
                    </div>
                </div>
                </div>
                    <div class="priceName">支付方式</div>
                <div class="typePrice">
                    <div class="wxCoin" @click="tabCion(0)">
                        <div v-show="cionIndex == 0">
<svg width="130px" height="40px" viewBox="0 0 130 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <text id="微信支付-copy-3" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" fill="#000000">
            <tspan x="48" y="26">微信支付</tspan>
        </text>
        <g id="weixinzhifu-copy-3" transform="translate(16.000000, 9.000000)" fill="#17A53F">
            <path d="M9.14948698,14.4829164 C7.71301341,15.3142185 7.49995686,14.0162199 7.49995686,14.0162199 L5.69964548,9.6552463 C5.00693407,7.58296514 6.29916904,8.72088377 6.29916904,8.72088377 C6.29916904,8.72088377 7.40796949,9.5916272 8.24948135,10.1222243 C9.09054303,10.6528213 10.0492225,10.2779878 10.0492225,10.2779878 L21.8188039,4.63875199 C19.6473617,1.8339754 16.0603345,0 11.9993848,0 C5.37197236,0 0,4.88062343 0,10.9015113 C0,14.3646862 1.77882265,17.4470222 4.54954825,19.4447996 L4.04987526,22.426421 C4.04987526,22.426421 3.80629631,23.296883 4.65047926,22.8931488 C5.22572295,22.6178726 6.69220871,21.6314325 7.56517335,21.0310859 C8.93754088,21.5275276 10.4326883,21.803179 12.000045,21.803179 C18.6269172,21.803179 24,16.9225556 24,10.9015426 C24,9.1575848 23.5472361,7.51061953 22.7452202,6.04872516 C18.9954069,8.39074631 10.2735036,13.8335261 9.14948698,14.4829164 Z" id="Path"></path>
        </g>
        <rect id="Rectangle-Copy-3" stroke="#007AEF" x="0.5" y="0.5" width="129" height="39"></rect>
        <polygon id="Rectangle" fill="#007AEF" points="118 28 130 16 130 40 106 40"></polygon>
        <g id="018caozuo_queding" transform="translate(114.000000, 29.000000)" fill="#FFFFFF">
            <path d="M6.70070313,10.2128437 L6.75670313,10.1710312 C6.80367188,10.1356875 6.83129688,10.1155625 6.85684375,10.09 L15.2183906,1.6115625 C15.5773594,1.2479375 15.5840625,0.648453125 15.234125,0.27503125 C14.897875,-0.08134375 14.3069063,-0.089859375 13.9631563,0.2595625 L5.80960937,8.526375 L1.50845312,4.06032812 C1.362125,3.9080625 1.16290625,3.82420312 0.9479375,3.82420312 C0.704578125,3.82420312 0.47103125,3.92742187 0.290390625,4.11503125 C-0.064703125,4.48329687 -0.088203125,5.058 0.237734375,5.39632812 L5.26457813,10.6162031 C5.574,10.9369844 6.14535938,10.9109062 6.48239063,10.5609687 C6.55851563,10.4822656 6.62251563,10.386 6.67232813,10.2760625 L6.70070313,10.2128437 Z" id="Path"></path>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="cionIndex !== 0">
                            <svg width="130px" height="40px" viewBox="0 0 130 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <text id="微信支付" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" fill="#000000">
            <tspan x="51" y="26">微信支付</tspan>
        </text>
        <g id="weixinzhifu" transform="translate(16.000000, 9.000000)" fill="#17A53F">
            <path d="M9.14948698,14.4829164 C7.71301341,15.3142185 7.49995686,14.0162199 7.49995686,14.0162199 L5.69964548,9.6552463 C5.00693407,7.58296514 6.29916904,8.72088377 6.29916904,8.72088377 C6.29916904,8.72088377 7.40796949,9.5916272 8.24948135,10.1222243 C9.09054303,10.6528213 10.0492225,10.2779878 10.0492225,10.2779878 L21.8188039,4.63875199 C19.6473617,1.8339754 16.0603345,0 11.9993848,0 C5.37197236,0 0,4.88062343 0,10.9015113 C0,14.3646862 1.77882265,17.4470222 4.54954825,19.4447996 L4.04987526,22.426421 C4.04987526,22.426421 3.80629631,23.296883 4.65047926,22.8931488 C5.22572295,22.6178726 6.69220871,21.6314325 7.56517335,21.0310859 C8.93754088,21.5275276 10.4326883,21.803179 12.000045,21.803179 C18.6269172,21.803179 24,16.9225556 24,10.9015426 C24,9.1575848 23.5472361,7.51061953 22.7452202,6.04872516 C18.9954069,8.39074631 10.2735036,13.8335261 9.14948698,14.4829164 Z" id="Path"></path>
        </g>
        <rect id="Rectangle" stroke="#CFCFCF" x="0.5" y="0.5" width="129" height="39"></rect>
    </g>
</svg>
                        </div>
                    </div>
                    <div class="wxCoin"  @click="tabCion(1)">
                        <div v-show="cionIndex !== 1">
<svg width="130px" height="40px" viewBox="0 0 130 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <text id="支付宝" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" letter-spacing="1" fill="#000000">
            <tspan x="53" y="26">支付</tspan>
            <tspan x="87" y="26">宝</tspan>
        </text>
        <rect id="Rectangle-Copy-6" stroke="#CFCFCF" x="0.5" y="0.5" width="129" height="39"></rect>
        <g id="alipay" transform="translate(17.000000, 8.000000)" fill="#1296DB" fill-rule="nonzero">
            <path d="M7.14876086,13.0516907 C9.26153625,13.0516907 10.8555764,13.9224834 12.5020158,14.5838515 C10.7699105,16.6870606 9.03789147,18.3287599 7.14876086,18.3287599 C5.47853499,18.3287599 2.70904538,17.7577116 2.70904538,15.7211219 C2.71387162,13.95101 5.15974418,13.0516907 7.14876086,13.0516907 Z M23.9794322,2.12144992 L23.9794322,21.8786363 C23.9794322,23.0348669 23.0371939,23.9771053 21.880877,23.9771053 L2.11912299,23.9771053 C0.962806139,23.9771053 0.0205677853,23.0348669 0.0205677853,21.8786363 L0.0205677614,2.12144992 C0.0205677614,0.96521926 0.962806115,0.0229808827 2.11912297,0.0229808827 L21.8761369,0.0229808827 C23.0324538,0.0229808827 23.9794322,0.96521926 23.9794322,2.12144992 Z M23.9698659,16.0828318 C22.2996401,15.6973354 19.1020797,14.5363647 16.0566322,13.4751076 C16.7180865,12.3379234 17.2651759,11.0578478 17.6601525,9.64461953 L17.7363382,9.36383542 C17.8125239,9.07831126 17.8790572,8.68816096 17.9456766,8.39307049 L13.1729502,8.39307049 L13.1729502,7.18926685 L19.1686129,7.18926685 L19.1686129,5.99485713 L13.1776902,5.99485713 L13.1776902,3.58233738 L10.7699105,3.58233738 L10.7699105,5.99485715 L4.77907403,5.99485713 L4.77907403,7.18926685 L10.7651705,7.18926685 L10.7651705,8.39315668 L5.97813765,8.39315671 L5.97813765,9.58748025 L14.9192756,9.58748025 C14.709851,10.6676114 14.3053943,11.757395 13.7820052,12.7043734 C13.3633283,12.5663083 9.57084692,11.4529106 7.10118785,11.4529106 C5.12156512,11.4529106 1.83833885,12.9661111 1.83833885,15.7307744 C1.83833885,18.4526049 3.72746946,19.9847656 7.10118785,19.9847656 C10.3416673,19.9847656 12.7208343,18.366939 14.6527978,15.4975633 C18.3215205,17.0964297 21.7334179,18.8570615 23.9697797,19.8705732 L23.9697797,16.0828318 L23.9698659,16.0828318 Z" id="Shape"></path>
        </g>
    </g>
</svg>
                        </div>
                        <div v-show="cionIndex == 1">
                          <svg width="130px" height="40px" viewBox="0 0 130 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
    <title>Slice</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <text id="支付宝" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" letter-spacing="1" fill="#000000">
            <tspan x="52" y="26">支付</tspan>
            <tspan x="86" y="26">宝</tspan>
        </text>
        <rect id="Rectangle-Copy-8" stroke="#007AEF" x="0.5" y="0.5" width="129" height="39"></rect>
        <polygon id="Rectangle-Copy-9" fill="#007AEF" points="118 28 130 16 130 40 106 40"></polygon>
        <g id="018caozuo_queding-copy" transform="translate(114.000000, 29.000000)" fill="#FFFFFF">
            <path d="M6.70070313,10.2128437 L6.75670313,10.1710312 C6.80367188,10.1356875 6.83129688,10.1155625 6.85684375,10.09 L15.2183906,1.6115625 C15.5773594,1.2479375 15.5840625,0.648453125 15.234125,0.27503125 C14.897875,-0.08134375 14.3069063,-0.089859375 13.9631563,0.2595625 L5.80960937,8.526375 L1.50845312,4.06032812 C1.362125,3.9080625 1.16290625,3.82420312 0.9479375,3.82420312 C0.704578125,3.82420312 0.47103125,3.92742187 0.290390625,4.11503125 C-0.064703125,4.48329687 -0.088203125,5.058 0.237734375,5.39632812 L5.26457813,10.6162031 C5.574,10.9369844 6.14535938,10.9109062 6.48239063,10.5609687 C6.55851563,10.4822656 6.62251563,10.386 6.67232813,10.2760625 L6.70070313,10.2128437 Z" id="Path"></path>
        </g>
        <g id="alipay-copy-2" transform="translate(15.000000, 8.000000)" fill="#1296DB" fill-rule="nonzero">
            <path d="M7.14876086,13.0516907 C9.26153625,13.0516907 10.8555764,13.9224834 12.5020158,14.5838515 C10.7699105,16.6870606 9.03789147,18.3287599 7.14876086,18.3287599 C5.47853499,18.3287599 2.70904538,17.7577116 2.70904538,15.7211219 C2.71387162,13.95101 5.15974418,13.0516907 7.14876086,13.0516907 Z M23.9794322,2.12144992 L23.9794322,21.8786363 C23.9794322,23.0348669 23.0371939,23.9771053 21.880877,23.9771053 L2.11912299,23.9771053 C0.962806139,23.9771053 0.0205677853,23.0348669 0.0205677853,21.8786363 L0.0205677614,2.12144992 C0.0205677614,0.96521926 0.962806115,0.0229808827 2.11912297,0.0229808827 L21.8761369,0.0229808827 C23.0324538,0.0229808827 23.9794322,0.96521926 23.9794322,2.12144992 Z M23.9698659,16.0828318 C22.2996401,15.6973354 19.1020797,14.5363647 16.0566322,13.4751076 C16.7180865,12.3379234 17.2651759,11.0578478 17.6601525,9.64461953 L17.7363382,9.36383542 C17.8125239,9.07831126 17.8790572,8.68816096 17.9456766,8.39307049 L13.1729502,8.39307049 L13.1729502,7.18926685 L19.1686129,7.18926685 L19.1686129,5.99485713 L13.1776902,5.99485713 L13.1776902,3.58233738 L10.7699105,3.58233738 L10.7699105,5.99485715 L4.77907403,5.99485713 L4.77907403,7.18926685 L10.7651705,7.18926685 L10.7651705,8.39315668 L5.97813765,8.39315671 L5.97813765,9.58748025 L14.9192756,9.58748025 C14.709851,10.6676114 14.3053943,11.757395 13.7820052,12.7043734 C13.3633283,12.5663083 9.57084692,11.4529106 7.10118785,11.4529106 C5.12156512,11.4529106 1.83833885,12.9661111 1.83833885,15.7307744 C1.83833885,18.4526049 3.72746946,19.9847656 7.10118785,19.9847656 C10.3416673,19.9847656 12.7208343,18.366939 14.6527978,15.4975633 C18.3215205,17.0964297 21.7334179,18.8570615 23.9697797,19.8705732 L23.9697797,16.0828318 L23.9698659,16.0828318 Z" id="Shape"></path>
        </g>
    </g>
</svg>  
                        </div>
                    </div>
                </div>
                <div class="priceTable">
                    <div class="shouldPayBox">
                        <span>应付金额</span>
                        <span>￥{{moneyLis}}</span>
                    </div>
                    <div class="gotCountBox">
                        <span>转换次数</span>
                        <span>{{transforLis}}次</span>
                    </div>
                </div>
                <div class="payRightNow" @click="handlePayNow">立即支付</div>
                <!-- <div  @click="handlePayNow">立即支付</div> -->
                
                <div class="mask" v-show="showMask"></div>
                <img :src="wxChatUrl" class="wxMask" v-show="showMask">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex:-1,
            cionIndex:0,
            pay_fee:0,
            moneyList:[1.00,10.00,20.00,50.00,100.00,200.00,500.00,1000.00],
            transforList:[5,11,23,60,130,280,800,2000],
            moneyLis:0, //支付金额
            transforLis:0, //转换次数
            wxChatUrl:'', //微信支付
            showMask:false, 
            order_id:'',
            timer:null, // 定时器
            timer2:null, //延时
        }
    },
    methods:{
        tabMenu(index) {
            this.activeIndex = index;
            this.transforLis = this.transforList[index];
            this.moneyLis = this.moneyList[index];
        },
        tabCion(index) {
            this.cionIndex = index;
        },
        handlePayNow() {
            let token = sessionStorage.getItem('token');
            let _token = {headers:{'Authorization':token}};
            // let data = {
            //     "pay_fee": this.moneyLis
            // }
            let data = {
                "pay_fee": 1
            }
            if(this.cionIndex == -1){
                alert('请选择支付方式')
            }
            // 支付宝支付
            if(this.cionIndex == 1) {
                this.axios.post('/alipay/pay',data).then(res=>{
                    // console.log(res.data.data)
                    this.order_id = res.data.data.order_id;
                              if(this.order_id) {
                                clearInterval(this.timer);
                                this.timer = setInterval(()=>{
                                    this.payStatus(this.order_id)
                                },4000)
                            }  
                    // location.href = res.data.data.url
                    window.open(res.data.data.url)
                }).catch(err=>{
                    console.log(err)
                })
            }
            // 微信支付
            if(this.cionIndex == 0) {
                this.axios.post('/wechat/pay', data).then(res=>{
                    console.log(res.data.data)
                    if(res.data.code == '200') {
                        this.showMask = true;
                    }
                    this.order_id = res.data.data.order_id;
                    this.wxChatUrl = 'data:image/png;base64,' + res.data.data.qrcode;
                    if(this.order_id) {
                        this.timer = setInterval(()=>{
                            this.payStatus(this.order_id)  //支付状态
                        },3000)
                    } 
                }).catch(err=>{
                    console.log(err)
                })
            }
            
        },
        // 支付状态
        payStatus(order_id) {
            //微信
            if(this.cionIndex == 0) {
                this.axios.get(`/wechat/info/${order_id}`).then(res=>{
                    console.log(res);
                    if(res.data.data.status == 2) {
                        this.$message({
                            type: 'error',
                            message: '支付失败'
                        })
                        console.log(res.status,'clear');
                        clearInterval(this.timer);
                    }
                    if(res.data.data.status == 3) {
                        this.$message({
                            type: 'success',
                            message: '支付完成'
                        })
                        this.showMask = false;
                        console.log(res.status,'success');
                        clearInterval(this.timer);
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
            // 支付宝
            if(this.cionIndex == 1) {
                this.axios.get(`/alipay/info/${order_id}`).then(res=>{
                    console.log(res.data.data.status)
                    if(res.data.data.status == 2) {
                        this.$message({
                            type: 'error',
                            message: '支付失败'
                        })
                        console.log(res.status,'clear');
                        clearInterval(this.timer);
                    }
                    if(res.data.data.status == 3) {
                        this.$message({
                            type: 'success',
                            message: '支付完成'
                        })
                        console.log(res.status,'clear');
                        clearInterval(this.timer);
                    }   
                }).catch(err=>{
                    console.log(err)
                })
            }
        }

    }
}
</script>
<style lang="">
    .priceBox{
        width: 760px;
        height: 540px;
        background: #FAFAFA;
        margin: 50px auto 0;
        padding: 20px 60px;
    }
    .priceBoxTitle{
        margin: 30px auto;
    }
    .priceBoxTitle div{
        text-align: center;
    }
    .priceBoxTitle div:nth-of-type(1){
        font: 32px/32px "微软雅黑";
        color: #000;
        text-align: center;
        font-weight: bold;
    }
        .priceBoxTitle div:nth-of-type(2){
        font: 18px/18px "微软雅黑";
        color: #000;
        text-align: center;
        margin-top: 5px;
    }
    .boxTop{
        box-sizing: content-box;
    }
    .priceName{
        font-size: 24px;
        color: #222;
        display: inline-block;
        float: left;
        line-height: 40px;
    }
    .priceMenu{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        float: left;
        margin-left: 20px;
        width: 640px;
        flex-wrap: wrap;
    }
    .menuConf{
        height:80px;
        width: 130px;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .menuTop{
        height: 36px;
        width: 100%;
        text-align: center;
        font: 24px/36px "微软雅黑";
        color: #000;
        font-weight: bold;
    }
    .menuLine{
        width: 98%;
        border: 1px dashed blue;
    }
    .menuDis{
        height: 34px;
        font: 16px/34px "微软雅黑";
        color: #666;
        text-align: center;
    }
    .typePrice{
        height: 40px;
        float: left;
        margin-left: 20px;
    }
    .wxCoin{
        float: left;
        height: 40px;
        width: 130px;
        text-align: center;
        font: 14px/40px "微软雅黑";
        margin-right: 20px;
        cursor: pointer;
    }
    .wxCoin div{
        height: 40px;
        width: 130px; 
    }
    .priceTable{
        width: 620px;
        height: 120px;
        background: #e4e4e4;
        float: right;
        margin-right: 24px;
        margin-top: 20px;
    }
    .shouldPayBox,.gotCountBox{
      height: 60px;
      width: 100%;
      font: 22px/60px "微软雅黑";
    }
    .shouldPayBox span:nth-of-type(1){
        float: left;
        margin-left: 20px;
    }
    .shouldPayBox span:nth-of-type(2){
        float: right;
        margin-right: 20px;
        color: #FF3B30;
    }
    .gotCountBox span:nth-of-type(1){
        float: left;
        margin-left: 20px;
    }
    .gotCountBox span:nth-of-type(2){
        float: right;
        margin-right: 20px;
        color: #FF3B30;
    }
    .payRightNow{
        width: 620px;
        height: 60px;
        background: #007AEF;
        float: right;
        margin-right: 24px;
        margin-top: 20px;
         font: 18px/60px "微软雅黑";
         color: #fff;
         text-align: center;
         cursor: pointer;
    }
    .activeClass{
        border: 1px solid #007AEF;
    }
    .cionClass{
        background: #007AEF;
        color: #fff;
    }
    .mask{
        height: 100%;
        width: 100%;
        background: #000;
        position: fixed;
        left: 0;
        top: 0;
        opacity: 0.6;
    }
    .wxMask{
        width: 258px;
        height: 258px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
</style>