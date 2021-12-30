# computerapi
노드 라이브러리, express를 이용해서 api를 만들어서 데시보드로 전송하는 프로그램입니다.<br>
아직 어떤것이 들어갈지 구성이 다 안되었으니 추후 개발 하단후 공지하겟습니다.

# 현재 api 형식
```json
{
    "cpu": {
        "model": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "usage": 13.65,
        "clock": [
            {
                "core": 0,
                "clock": 3275
            },
            {
                "core": 1,
                "clock": 3275
            },
            {
                "core": 2,
                "clock": 3275
            },
            {
                "core": 3,
                "clock": 3275
            },
            {
                "core": 4,
                "clock": 3275
            },
            {
                "core": 5,
                "clock": 3275
            },
            {
                "core": 6,
                "clock": 3275
            },
            {
                "core": 7,
                "clock": 3275
            }
        ],
        "proccess": [
            {
                "name": "firefox",
                "pid": 1009371,
                "cpu": 34.285714285714285
            },
            {
                "name": "gnome-system-monitor",
                "pid": 1010057,
                "cpu": 3.2520325203252036
            },
            {
                "name": "node",
                "pid": 1001491,
                "cpu": 1.5774888083564271
            },
            {
                "name": "node",
                "pid": 1001449,
                "cpu": 0.979765708200213
            },
            {
                "name": "gnome-shell",
                "pid": 1374,
                "cpu": 0.3179792938240505
            }
        ]
    },
    "ram": {
        "totalMemMb": 7910.72,
        "usedMemMb": 2659.64,
        "freeMemMb": 5251.08,
        "usedMemPercentage": 33.62,
        "freeMemPercentage": 66.38
    },
    "nettotal": {
        "inputMb": 0.01,
        "outputMb": 0.09
    },
    "netstatus": [
        {
            "interface": "lo",
            "inputBytes": "266631471",
            "outputBytes": "266631471"
        },
        {
            "interface": "enp4s0",
            "inputBytes": "1778699536",
            "outputBytes": "1535480269"
        }
    ]
}           
```
### Cpu
모델하고 사용량 클럭 정보를 보여줌니다.
또 친구의 권의로 인해 cpu프로세서 많이 먹는 5위를 선정해서 정보를 제공합니다.

### 램
램은 단순 사용량만 보여줌니다.

### 네트워크
네트워크는 종합하고 이더넷을 보여주는데 이더넷은 하나씩 추가 될떄 마다 하나씩 추가되어서 정보를 제공합니다.
