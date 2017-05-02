<template>
	<div class="vipIntriduce">
		<p class="biaoti">会员卡</p>
		<ul class="cardList">
			<li class="card" v-for="(card,index) in cards">
				<div class="introduce" @click="moreIntroduce(index)">
					<div class="pic">
						<img :src="card.picUrl" />
					</div>
					<div class="wenzi">
						<div class="txt">
							<h3>{{card.name}}</h3>
							<div>{{card.sortName}}</div>
						</div>
					</div>
					<div class="jiantou" :class="card.direction"></div>
				</div>
				<div class="more" v-show="card.moreShow">
					<ul class="details">
						<li v-for="detail in card.details">
							<div class="list" :class="detail.right">
								<div class="icon" :class="detail.type"></div>
								<div class="neirong" :class="detail.baijin">
									<h4>{{detail.title}}<span>{{detail.times}}</span></h4>
									<p>{{detail.detailTxt}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="buy">
					<div class="btn" @click="buyCard">立即购买</div>
				</div>
				<div class="kongbai" v-show="card.isShow"></div>
			</li>
		</ul>
		<p class="biaoti">使用说明</p>
		<div class="explain">
			<div class="txt">
				<p>1-易加医重疾无忧咨询卡由易加医针对会员特别推出。持有会员卡的用户可尊享易加医会员服务权益。</p>
				<p>2-会员用户拥有一键咨询、快捷咨询、精准就医、肿瘤风险评估等服务内容。享有提问优先受理，折扣购买服务，协助100%成功就医等优质服务。</p>
				<p>3-会员卡有效期为1年时间。</p>
				<h4>升级说明</h4>
				<p>银卡、金卡会员用户可以折扣价格升级手中的会员卡，升级后原会员卡内服务将自动替换为升级后的会员服务内容。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vipIntroduce",
		data() {
			return {
				cards: [{
						sort: "silver",
						picUrl: "static/images/pic_yjy_silver-card.png",
						name: "银卡", 
						sortName: "重症无忧咨询卡",
                        isShow: "true",
                        moreShow: "",
                        direction: "",
						details: [{
								type: "yjzx",
								title: "一键咨询",
								times: "",
								detailTxt: "肿瘤问题，一键咨询",
								right: "right"
							},
							{
								type: "jzjy",
								title: "精准就医/",
								times: "1次",
								detailTxt: "精准推荐，便捷就医"
							},
							{
								type: "kjzx",
								title: "快捷咨询/",
								times: "1次",
								detailTxt: "24小时电话咨询医生",
								right: "right"
							},
							{
								type: "",
								title: "",
								times: "",
								detailTxt: ""
							}
						]
					},
					{
						sort: "gold",
						picUrl: "static/images/pic_yjy_gold-card.png",
						name: "金卡", 
						sortName: "重症无忧咨询卡",
						isShow: "true",
						moreShow: "",
						direction: "",
						details: [{
								type: "kjzx",
								title: "快捷咨询/",
								times: "6次",
								detailTxt: "24小时电话咨询医生",
								right: "right"
							},
							{
								type: "zgjy",
								title: "尊贵就医/",
								times: "1次",
								detailTxt: "预约专家，轻松就医"
							},
							{
								type: "zlfxpg",
								title: "肿瘤风险评估/",
								times: "1次",
								detailTxt: "专业风险评估与建议",
								right: "right"
							},
							{
								type: "yjzx",
								title: "一键咨询",
								times: "",
								detailTxt: "肿瘤问题，一键咨询"
							}
						]
					},
					{
						sort: "platina",
						picUrl: "static/images/pic_yjy_platinum-card.png",
						name: "白金卡", 
						sortName: "重症无忧咨询卡",
						isShow: "",
						moreShow: "",
						direction: "",
						details: [{
								type: "kjzx",
								title: "快捷咨询/",
								times: "6次",
								detailTxt: "24小时电话咨询医生",
								right: "right"
							},
							{
								type: "djjy",
								title: "顶级就医/",
								times: "1次",
								detailTxt: "",
								baijin: "baijin"
							},
							{
								type: "zlfxpg",
								title: "肿瘤风险评估/",
								times: "1次",
								detailTxt: "专业风险评估与建议",
								right: "right"
							},
							{
								type: "yjzx",
								title: "一键咨询",
								times: "",
								detailTxt: "肿瘤问题，一键咨询"
							}
						]
					}
				]
			}
		},
		methods: {
			moreIntroduce(index){
				let kg = this.cards[index].moreShow;
				if (kg == "true") {
					this.cards[index].moreShow = "";
					this.cards[index].direction = "";
				} else{
					this.cards[index].moreShow = "true";
					this.cards[index].direction =  "direction";
				}
			},
			buyCard(){
				alert("购买");
			}
		}
	}
</script>

<style scoped>
	.biaoti {
		background-color: #F0F0F0;
		font-size: 0.32rem;
		height: 0.88rem;
		line-height: 0.88rem;
		padding-left: 0.38rem;
	}
	
	.cardList{
	 	background-color: #FFFFFF;	
	}
	
	.cardList .card {
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.cardList .card .introduce {
		font-size: 0.3rem;
		color: #777777;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.cardList .card .introduce:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.cardList .card .introduce h3 {
		font-size: 0.36rem;
		color: #333333;
		margin-bottom: 0.2rem;
	}
	
	.cardList .card .pic {
		width: 3.2rem;
		height: 2.02rem;
		margin: 0.25rem 0.36rem 0.25rem 0.38rem;
		float: left;
	}
	
	.cardList .card .pic img {
		width: 3.2rem;
		height: 2.02rem;
	}
	
	.cardList .card .introduce .wenzi {
		float: left;
		margin-top: 0.88rem;
	}
	
	.cardList .card .introduce .jiantou {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAHlBMVEUAAADDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8MCwkupAAAACnRSTlMA/jkn7kfJ5TEYCsydrAAAAEtJREFUGNNjoASwZkAZYQYMgSIGYCaToBBDoKAzmK0oKATkgySglCJQAkxCRSAERAgiDJGYDBaGSJSAhKESMGGYIXAJA4SjgsjyCgDxuwlCMoaTlgAAAABJRU5ErkJggg==');
		background-repeat: no-repeat;
		background-size: 0.38rem 0.38rem;
		float: right;
		margin-right: 0.38rem;
		margin-top: 1rem;
		width: 0.38rem;
		height: 0.38rem;
	}
	
	.cardList .card .introduce .jiantou.direction {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAIVBMVEUAAADDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8M+XLUzAAAAC3RSTlMA/jnuKEclyeUxGB0mmncAAABOSURBVBjTYyALBCGYTIIOcLaioAlCWFDYAS7cDJSACgsvA0rAVIMwVNgBTECEISRUGEoFggTAEkIMgVATmIBs1kqoLeFAsQQom41kHwEA1iEJ+z51UU8AAAAASUVORK5CYII=');
	}
	
	.cardList .card .more {
		font-size: 0.3rem;
		color: #333333;
		animation: fade-in;
		/*动画名称*/
		animation-duration: 1s;
		/*动画持续时间*/
		-webkit-animation: fade-in 1s;
	}
	
	.cardList .card .more .details li {
		border-bottom: 1px solid #DDDDDD;
		float: left;
		width: 3.75rem;
	}
	
	.cardList .card .more .details .list{
		margin: 0.44rem 0 0.44rem 0;
	}
	
	.cardList .card .more .details .right{
		border-right: 1px solid #DDDDDD;
	}
	
	.cardList .card .more .details .list:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.cardList .card .more .details:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.cardList .card .more .details .icon {
		height: 0.6rem;
		width: 0.6rem;
		float: left;
		margin-right: 0.1rem;
		margin-left: 0.28rem;
		background-repeat: no-repeat;
		background-size: 0.6rem 0.6rem;
	}
	
	.cardList .card .more .details .yjzx {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAclBMVEUAAABSx9BSx9BSx9BSx9BSx9BSx9BSx9BSx9BSx9BSx9BSx9BSx9D///+z5uldy9T2/P3P7vGV3OK+6e1jzdXa8/Xv+/xy0di55+yh4OVpztbf9fao4ueD197p+Pma3uN309rL7vDF7O+v5OiN2eDS8PICofVVAAAADHRSTlMABeJU+tqsiVvzppSF7ic1AAABdUlEQVRIx53W27qCIBAFYMw0K1ai4CnPVu//ihtxl9lJYF346cXvzDdcMETFcQ+bLV3J3ju4DnnE9ahmPPefODtqkN1UTBojpXqjhnFlcxtTtHFIQI0TEN8c+eRDd+JaVG32oz/ydqZZBJWy/oa2hL6kYEB6ixoA/Jt6RRWQ1KrgAER6qAbyR02g0kIlbvNHDiY0UAY8TS1kaDVQhWTqjCs7oNdAfJpYD7DzaFFqoAGnsS3IxPKlRaOBcgzP6KJVKUb6jBJwDRQyFDOqgXodqaPp7uicIqE6KGyQ3NEJLNNC8vczYjXVQ1RUdxR3VBfN0wupMWo5YzzMStaLsGfVKhIjSiGTjM+GA7iuoTPeE/1Cwhx1DOXVFOWQuRgijjGFGRJqZswM0U4BQ0RbG0RzG0QTGyRSY6SGYYForIfWh8EXaC8f68NoxOJS8z4hcVrmEi6uT6uL2molsFo+bNYc24WKOEcTc3Ssl0RVLPDX19Htxg+mMn+AS4Ms+FF85wAAAABJRU5ErkJggg==');
	}
	
	.cardList .card .more .details .jzjy {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAdVBMVEUAAABp2K9p2K9p2K9p2K9p2K9p2K9p2K9p2K9p2K9p2K9p2K9p2K////9v2rPh9/Dp+vPv/Pan6ND1/PrP8uV83bl23Lb5/fzY9erI8OG57dm169eU48aL4MHT9Oea5ciP4sTC796+7tyf5syI4L+u6dOB37zJL0WXAAAADHRSTlMA+asGVd7YiVvkUpRGFJisAAABhklEQVRIx63W2XKCMBSA4bAW9WRhC6us1vd/xJYMMNowHJPpfxV1PhE5DCEqz3cDB5Cc0PU9sncN4cPC62a+wKCv3RgrHwzzCfEupujikQiMi4hrjlwSmKOAOObIIWCRjlgjaNHd1TLhqRhzHDFOVQlALtQqHVBU0bWeiXUVSwTldCuu18VQ1Aj6plpJJRBU6aibKTtHnY7KmebnKNPRXGFHSjQjZsqRc2Ix1esRBK1uJnyMhr/HagBHILO3U7oDilT9frCiYYCgPVato/TAbg19nLgEBOkXjDMwRDDFEowRa+EEIeHoMZUiFpyXZZZVU90kSb5NSpMco0dJtQqmPuG/y+cBYiN9LY15mY11v3xSL69b0NFdvAieM9hrhXoHDlD59qPGpB+eUi5f1qmpZXCEWEb1jqeWvI/OcfXZ7d6mR6R7nl+nnKv/jfM4TlMligy/n1hVZANsScn+b4zsHmqhOQqsHtRWWwKrzYfNNsdqQ6W6mZibxSbRJ3te9Ml2NHAjjyz9AOCRgywMj4BnAAAAAElFTkSuQmCC');
	}
	
	.cardList .card .more .details .kjzx {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAY1BMVEUAAAB2mO92mO92mO92mO92mO92mO92mO92mO92mO92mO/////1+P57nO/B0Pj4+v54me/J1viuwvbj6vykuvSDovDq7/yOq/Hw9P3v8v3Y4vrP2/mpvvW6y/ayxfabs/OTrvKhPGy8AAAACnRSTlMABeJU+avaiVuUExL++QAAAU5JREFUSMet1tuOgyAQgGHAQy0znFTUVtvu+z/lJqWx2a6DQvrf2fgFgkVhz3hRiVLuVNZVwdlaUcuD1cWL8JNM6BQGIwypnnOTiRWMcZGKBGeNTK5hVTqqmEhHgpXpqGQyo+8h1bvOAGDnenUQeW1gzWh/BC0If8JlF1kN/9I2jtQVNrraKJphszmGWiBaaOSRQuhJpIFMU0ghjVARqIdIPYFcDDkCdRC6hAnh6yLUEQjDzaP0A8DNWg0weDmGnycCvdepBbRSWoRlXVNzECkD7YowPr2HHCcAp5QDuIzyETbKsLMQ4a6Pi2vOkt9yHu4PgZShzZDzh72TyJNDTSpjE7YZ2x1V+osFup1XmCMWnEKh/rKBTB9HUrUDsRQUCo33uZvw3cfTzfuo1elIZH2os44EWYePnGNO7oGK8XOKOfPMQ2KIN0eOo6JqwjC/N89s9XQbBhsAAAAASUVORK5CYII=');
	}
	
	.cardList .card .more .details .zgjy {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAhFBMVEUAAAD/rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//rB//////+/T/4K7/8+D/0Yf/2aD/9+n/7tL/yXT/vlT/wFv/8Nr/sCr/47f/3aj/05D/zoD/sjD/1pj/uEP/+e//xGb/ukr/tDr/6sv/6Mb/y3r/x22LQ4h6AAAAD3RSTlMAVAb64NqsW+SJ86aUigd+UyLbAAACCklEQVRIx52WiY6jMAyGoeec+xvCEW7K9pi27/9+a5OhO1IDTPiEoqDkixNjiXg9K/99s8YMb9t3f+U98Lf4JVt/cF7hwKu7M1g+HPE5By+u0svK28OZvbdzl3bexl3aeGt3ae1hAb+RDll+cJOyOiEi7SJdrtRzmpGu6tr9HZxEDG7O41I/tyCm4kPwk3L3qLiRQbuUU8dtRUIqszR3lIhfQEe5VapJcdvw4gFRg1wCFV/E3ABFtVXi8ZIDyPIJJTgdOKDElbVKDmeVlDlwLbtTdD7lVEifggw4s2qVgu/USprDRN/apBPnKIc5sTsmaQhRQRS3t6gRJT6A0WMSEbVD8u833Z7iOMpgaHlwTIp+fLRUhIFoQuqg1SC2D0FpdBNSjJCoyH9KeUEUIh6TAhnNuKVQqugM5hCanIcT2SuALJEazb/D9C8ZUExIVAGXlIaURMSkFynIMelITA2UipizqShSpSkSOlqlOwmh1Cyj5YsyDRCSoK2SmUxpW5j9md0VbUpGtkpm6wMd0NF/Ktglc5qBGIjpgSpHJWRjUoZxCbFdijEllckwLxyyxiTlpITIJkWYlsrgWQrKGQnVs1RhTrqnJlYN1CZOep+ThEuuoyYDsibS+QVPeG9wZu1t3aXNoh/1oivBksvHn0XXHObTzfn0ej5cnI/ll0Rhtd/NX0fXm91+5Qn/AFgtpiz5KoadAAAAAElFTkSuQmCC');
	}
	
	.cardList .card .more .details .zlfxpg {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAWlBMVEUAAAC4l+y4l+y4l+y4l+y4l+y4l+y4l+y4l+y4l+y4l+y4l+z////VwvTk1/i8nO7Ep+/p3/rh0/f28vzcy/XHrfD6+P3LsvHRu/PPuPLy7Pzt5frYxvXv6PukLdUrAAAAC3RSTlMA4lT4BtqsiVumlDsaaAAAAAGcSURBVEjHnZbtmoIgFITxM4vBD8S0tPu/zRUXPM8uasD8YrI3DsMJYZvy9J5k/Iuy4p7mbFdacE8VqWVuPEA3YkKplAcqXTNIQqEkZxUPVsXKcKhkSTiUsCwcyhg/UPvah2PLXbEjBpBmqIDWDxoAtBbH6AfxD9Btgw74fC+PplJCCAVg8IV4Dauae0Nih4Q31PTAXNf1DPSNL6SAZ6PhJ6B8oGGaJl3WXubqhy/QiE1vY9+/dryAKILO2I7iuCpPdZ3+5rjPu3rlE0Rn63vTnOeQUI1tOSmEkLYJGyVOodF2gIKVslOPZ9Bge63pDdM39LkL0WKEVm21OVraEdTCiNIzai/SM2VRekb9RXoLgHqV2U9BdjmGTIMue8dSvy7ankFSx2XTk/+sA1EM5vB66aFucbKtA9Ej2jFJu0M/55Y3AzOdR3QW0QOC3PomPedmJyrBhSgJsUov3LEORJkbPRvXEnRydom/drn8E8p6kzy0BEUo7qVWhENJ1Is66koQdfmIuebEXai0HiHMI+qSuCuvSo/raFJWOdP6AXfcd9WaSxZ4AAAAAElFTkSuQmCC');
	}
	
	.cardList .card .more .details .djjy {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAdVBMVEUAAAD2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/2c2/////7uLb6p6X94OD8ycj4jYv3e3f96Of7wcD+9vb6sa/4lJL+7Ov+8fH3g3/95eT80M/6rKr5nZv3hoP82dj7v735mJb4iYf5pKLGkusxAAAADXRSTlMABVT64NqsiVvk86aUAN4DlQAAAVRJREFUSMfNltuOgyAQQMFb7QVdkQqordrq/v8n7oCN292E6NCk6XkgDJnjEBIzQyw0OEYhW+EQHwNKFoKYbSQOHgrdMQS7uRg4KMvejSGBG9I9VtpTkjI0KUnwUkIivBSREC+FhHnwuqTyX8bsH6VDap5yvt4m9dxQw+7MLa1DMuSmyhLdIFJLtC4ttUeEVBkygJuN2iZlfyg+UDoLi8ZJrJJS8hIpcVgrH0m9Rbr6Sh1WKmD9xkoSVo2UpgwQSOlu0/V26QJIE9ylGoZ2kwQM9mdXsFzBcUmi08PVvJcNlKkj+8wgO6cEL2zRjE2VtMmalbU9u7UuKc8Mjcjr2a5LU5LbfeGS+kdmO0tcMEsH+4twSVN9u2sGtA18Wi/nuinEhgYwFv1z2IrXu8bBp6nFeCnyatReI4HX8OEz5vgOVISeMM6J+g+JAE2T9XE0jJJ0LvMDp4yNoJKjeQ8AAAAASUVORK5CYII=');
	}
	
	.cardList .card .more .details .neirong {
		float: left;
		font-size: 0.28rem;
		margin-top: -0.04rem;
	}
	
	.cardList .card .more .details .baijin {
		margin-top: 0.14rem;
	}
	
	.cardList .card .more .details .neirong span,
	p {
		color: #777777;
		font-size: 0.28rem;
	}
	.cardList .card .more .details .neirong h4{
		font-size: 0.28rem;
		margin-bottom: 0.07rem;
	}
	
	.buy {
		height: 1.4rem;
		padding-top: 0.3rem;
	}
	
	.buy .btn {
		font-size: 0.32rem;
		color: #FFFFFF;
		background-color: #29a89f;
		height: 0.8rem;
		width: 6.4rem;
		line-height: 0.8rem;
		text-align: center;
		border-radius: 0.2rem;
		margin-left: 0.55rem;
	}
	
	.kongbai {
		height: 0.2rem;
		background-color: #E0E0E0;
	}
	
	.explain {
		background-color: #FFFFFF;
		border-top: 1px solid #DDDDDD;
		color: #777777;
		/*font-size: 0.3rem;*/
		line-height: 0.4rem;
		padding: 0.4rem 0.38rem;
		text-align: justify;
	}
	
	.explain h4 {
		font-size: 0.3rem;
		color: #333333;
		margin: 0.24rem 0;
	}
	
	@keyframes fade-in {
		0% {
			opacity: 0.3;
		}
		40% {
			opacity: 0.7;
		}
		100% {
			opacity: 1;
		}
	}
	
	@-webkit-keyframes fade-in {
		0% {
			opacity: 0.3;
		}
		40% {
			opacity: 0.7;
		}
		100% {
			opacity: 1;
		}
	}
</style>