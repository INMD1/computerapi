# computerapi
노드 라이브러리, express를 이용해서 api를 만들어서 데시보드로 전송하는 프로그램입니다.<br>
아직 어떤것이 들어갈지 구성이 다 안되었으니 추후 개발 하단후 공지하겟습니다.

# 현재 api 형식
```json
{
    "cpu": {
        "model": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "usage": 0.63,
        "clock": [
            {
                "core": 0,
                "clock": 3356.25
            },
            {
                "core": 1,
                "clock": 3356.25
            },
            {
                "core": 2,
                "clock": 3356.25
            },
            {
                "core": 3,
                "clock": 3356.25
            },
            {
                "core": 4,
                "clock": 3356.25
            },
            {
                "core": 5,
                "clock": 3356.25
            },
            {
                "core": 6,
                "clock": 3356.25
            },
            {
                "core": 7,
                "clock": 3356.25
            }
        ],
        "proccess": [
            {
                "name": "node",
                "pid": 1001491,
                "cpu": 1.940700808625337
            },
            {
                "name": "node",
                "pid": 1001449,
                "cpu": 1.0231556273559503
            },
            {
                "name": "gnome-shell",
                "pid": 1374,
                "cpu": 0.30930280877600674
            },
            {
                "name": "node",
                "pid": 1001485,
                "cpu": 0.18867924528301888
            },
            {
                "name": "node",
                "pid": 4526,
                "cpu": 0.11880003124765089
            }
        ]
    },
    "ram": {
        "totalMemMb": 7910.72,
        "usedMemMb": 2029.85,
        "freeMemMb": 5880.87,
        "usedMemPercentage": 25.66,
        "freeMemPercentage": 74.34
    },
    "ram_porcess": [
        {
            "name": "gsd-print-notifications",
            "pid": 1508,
            "pmem": "9793536"
        },
        {
            "name": "ibus-engine-hangul",
            "pid": 2187,
            "pmem": "9531392"
        },
        {
            "name": "gsd-a11y-settings",
            "pid": 1496,
            "pmem": "8613888"
        },
        {
            "name": "ibus-engine-simple",
            "pid": 1686,
            "pmem": "8478720"
        },
        {
            "name": "tracker-miner-fs",
            "pid": 1014,
            "pmem": "82735104"
        }
    ],
    "nettotal": {
        "inputMb": 0,
        "outputMb": 0
    },
    "netstatus": [
        {
            "interface": "lo",
            "inputBytes": "259154819",
            "outputBytes": "259154819"
        },
        {
            "interface": "enp4s0",
            "inputBytes": "1760980255",
            "outputBytes": "1521705660"
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
