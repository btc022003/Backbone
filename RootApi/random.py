#-*-coding=utf-8-*-
import os;
import random;

print "生成不重复随机数模块"

'''
按照位数补齐数字
@num 需要补齐的数字
@numLen 补齐后的长度
'''
def valNum(num,numLen=4):
	result = str(num)
	temLen = len(result)
	disLen = numLen-temLen
	stPre = ""
	i=0	
	while i<disLen:
		stPre += "0"
		i = i+1
		pass
	return stPre+result
	pass


try:
	book = open('random.txt',"w")
	print book
	for i in xrange(1,100):	
		strData = str(random.randint(10,99))+str(valNum(i,4))+str(random.randint(0,9))
		book.write(strData + "\n")
	book.close()
	pass
except Exception, e:
	#print '文件未找到'
	fileHandle = open('random.txt','w')
	fileHandle.write('init')
	fileHandle.close()
	print "init end"
else:
	pass
finally:
	pass



