<template>
	<div class="home">
		<div class="banner">
			<div class="introduce" id="introduce" @click="goIntroduce()">
				<img src="../assets/banner.png">
			</div>
			<div class="active">立即激活</div>
		</div>
		<ul id="list">
			<li v-for="item in items" @click="goList(item.lb)">
				<span>{{item.name}}</span>
				<div class="rightArrow"></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				items: [{
						name: "我的服务",
						lb: "myService"
					},
					{
						name: "更多可选服务",
						lb: "moreService"
					},
					{
						name: "下载APP一键咨询",
						lb: "download"
					},
					{
						name: "全国医生资源",
						lb: "doctorResource"
					},{
						name: "咨询医生库（VIP卡含）",
						lb: "vipDoctor"
					},
					{
						name: "抗癌超市",
						lb: "market"
					},
					{
						name: "个人信息",
						lb: "personalInf"
					}
				]
			}
		},
		methods: {
			goList(p) {
				this.$router.push('/' + p);
			},
			goIntroduce() {
				this.$router.push('/vipIntroduce');
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.banner img{
		width: 100%;
		height: 3.02rem;
	}
	.banner .active{
		height: 0.88rem;
		width: 6.9rem;
		line-height: 0.88rem;
		text-align: center;
		background-color: #fe9d05;
		border-radius: 0.44rem;
		font-size: 0.36rem;
		margin: 0.2rem auto 0.3rem auto;
		color: #FFFFFF;
	}
	
	#list li {
		font-size: 0.32rem;
		padding: 0 0.38rem;
		height: 0.99rem;
		line-height: 0.99rem;
		background-color: #FFFFFF;
		border-bottom: 1px solid #E0E0E0;
	}
	
	.rightArrow {
		height: 0.28rem;
		width: 0.19rem;
		background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWBAMAAAAC47AUAAAAIVBMVEUAAADDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8M+XLUzAAAAC3RSTlMA/jgn7eNGSzE/D30Od3QAAABDSURBVAjXY2BoYgADDkEDMM0q6Aym2QVFIAKKUAEm4gVMBSXB9FJBMRDF7CioAKJNBIUIc5mgXFYIl4ENyAWDdDAJABNJCK7QYaNiAAAAAElFTkSuQmCC');
		background-repeat: no-repeat;
		background-size: 0.19rem 0.28rem;
		margin-top: 0.34rem;
		float: right;
	}
</style>