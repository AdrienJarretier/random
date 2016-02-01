for word in $(cat updates.txt)
do
	pacman -Qi $word 2> /dev/null
	while [ $? -eq 1 ] && [ ${#word} -gt 1 ]
	do
		word=${word:0:-1}
		ouput=$(pacman -Qi $word 2> /dev/null)
	done
	# echo $ouput | grep "Required By : None"
	if [ $(echo "$ouput" | grep -c "Required By    : None") -eq 1  ]
	then
		echo "$ouput" | grep --color=always "Name\|Description\|Optional For\|Install Date\|Install Reason"
		echo "-------------------------------------------------------------------------------"
	fi
done