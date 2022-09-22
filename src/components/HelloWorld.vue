<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <h1 class="scoreDream">통계</h1>
        </div>
        <div>
          <v-card class="pa-5 mb-5">
            <h3 class="scoreDream">통계 검색</h3>
            <div class="select-form">
              <ul class="d-flex">
                <li>
                  <label class="label-custom">관할기관</label>
                  <v-select :items="location" label="본부" dense solo style="width: 150px"></v-select>
                </li>
                <li>
                  <label style="opacity:0">지사</label>
                  <v-select :items="location" label="지사" dense solo style="width: 150px"></v-select>
                </li>
                <li>
                  <label style="opacity:0">노선</label>
                  <v-select :items="location" label="노선" dense solo style="width: 150px"></v-select>
                </li>
                <li>
                  <label style="opacity:0">생태통로</label>
                  <v-select :items="location" label="생태통로" dense solo style="width: 150px"></v-select>
                </li>
                <li>
                  <label>생태통로 유형</label>
                  <v-select :items="location" label="생태통로 유형" dense solo style="width: 200px"></v-select>
                </li>
                <li>
                  <label class="label-custom">설치날짜</label>
                  <div class="d-flex">
                    <input type="date" class="static-input notoSansRegulr" value="2022-07-22" min="2022-07-22"
                      max="2023-07-22" />
                    <div class="pa-2">~</div>
                    <input type="date" class="static-input notoSansRegulr" value="2022-07-22" min="2022-07-22"
                      max="2023-07-22" />
                  </div>
                </li>
                <li>
                  <label class="label-custom">시간</label>
                  <div class="d-flex">
                    <input type="time" class="static-input notoSansRegulr" value="13:10:20" min="13:00:00"
                      max="15:00:00" />
                    <div class="pa-2">~</div>
                    <input type="time" class="static-input notoSansRegulr" value="13:10:20" min="13:00:00"
                      max="15:00:00" />
                  </div>
                </li>
                <li>
                  <label>종명</label>
                  <v-select :items="location" label="종명" dense solo style="width: 120px"></v-select>
                </li>
              </ul>
            </div>
          </v-card>
        </div>

        <div>
          <v-card class="pa-5">
            <div class="d-flex" style="width: 400px;">
              <h3 class="scoreDream">통계 조회</h3>
              <v-select :items="statics" class="ml-3" label="월별" dense solo v-model="selectedItem">
              </v-select>
            </div>

            <div>
              <button @click="test">zmfflr</button>
            </div>

            <div>
              <canvas v-if="selectedItem === '월별'" id="line-chart-gradient" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '분기별'" id="stackedBar-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '본부별'" id="stackedBar-LineChart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '지사별'" id="multiAxisLine-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '연도별'" id="pointStyling-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '일별'" id="multiAxisLine-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '노선별'" id="multiAxisLine-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
              <canvas v-else-if="selectedItem === '생태통로별'" id="multiAxisLine-chart" class="chart-canvas" height="500"
                aria-label="Hello ARIA World" role="img"></canvas>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'HelloWorld',

  data: () => ({
    myChart: null,
    selectedItem: '월별',
    statics: ["본부별", "지사별", "연도별", "분기별", "월별", "일별", "노선별", "생태통로별"],
    location: ["대구광역시", "부산광역시", "인천광역시", "울산광역시"],
  }),
  created() {

  },
  mounted() {
    // 차트 그리기
    this.createChart()
  },
  methods: {
    test(){
      console.log(this.$routes);
    },
    createChart() {
      var ctx = document.getElementById('line-chart-gradient').getContext("2d");

      var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
      gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
      gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

      var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
      gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
      gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors


      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'Aprill', 'May', 'June', 'July'], // 7개
          datasets: [
            {
              label: "Mobile apps",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#cb0c9f",
              backgroundColor: gradientStroke1,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400],
              maxBarThickness: 6,
            },
            {
              label: "Websites",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#3A416F",
              backgroundColor: gradientStroke2,
              fill: true,
              data: [30, 90, 40, 140, 290, 290, 340],
              maxBarThickness: 6,
            },
            {
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                padding: 10,
                color: "#b2b9bf",
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                color: "#b2b9bf",
                padding: 10,
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
          }
        }
      });
      console.log(myChart);
    }
  }
}
</script>
<style scoped>
.select-form>ul>li>label {
  font-family: "Noto Sans KR Medium";
}
</style>