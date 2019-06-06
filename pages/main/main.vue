<template>
    <view class="content">
        <view v-if="hasLogin" class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view>
		<view class="qrimg">
    <tki-qrcode
    ref="qrcode"
    :val="val"
    :size="size"
    :unit="unit"
    :background="background"
    :foreground="foreground"
    :pdground="pdground"
    :icon="icon"
    :iconSize="iconsize"
    :lv="lv" 
    :onval="onval"
    :loadMake="loadMake"
    :usingComponents="usingComponents"
    :showLoading="showLoading"
    :loadingText="loadingText"
    @result="qrR" />
</view>
    </view>
</template>

<script>
    import { mapState } from 'vuex';
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		components: {tkiQrcode},
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        }
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>
