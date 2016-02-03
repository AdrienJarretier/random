LC_TIME="en_US.UTF-8" pacman -Qei | grep "Name\|Install Date" > tmp

old_IFS=$IFS
IFS=$'\n'

count=1

packageInfos=""

for line in $(cat tmp)
do
	if [ $count -eq 1 ]
		then
		packageInfos=$line
	else
		packageInfos=$line" | "$packageInfos
		# echo $packageInfos | sed "s/\(.*\)|\(.*\)/\2\1/"
		echo $packageInfos >> installedPackages.txt
		count=0
	fi
	((count++))
done
IFS=$old_IFS

# sort installedPackages.txt

echo -n "" > installedPackages.txt
echo -n  "" > tmp
