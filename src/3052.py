s=list(map(int,[input()for i in range(10)]));print(len(set([s[i]%42for i in range(10)])))